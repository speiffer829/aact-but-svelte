<script context="module">
export async function load({ page }){
	const id = page.params.id
	return {
		props: {
			id
		}
	}
}
</script>

<script>
	import { materials } from '$lib/store'
	import Dots from '$lib/components/Dots.svelte'
	import { fade, fly, slide } from 'svelte/transition'
	import { goto } from '$app/navigation'

	export let id;

	let wiggle = .3
	let extended = true
	let heated = false
	let answerString = ''
	let showHint = false
	let wrong = false
	let strike = 0
	let inputEl;


	$: material = $materials.materials.filter(m => m.id == id)[0]
	$: jgOffset = answerString.length

	function handleHeatUp() {
		heated = true;
		wiggle = material.wiggle
		extended = false

		console.log('wiggle:', wiggle)
	}

	function handleFormSubmit() {
		if(answerString === 'yay' || answerString === `${material.heatCapacity}`){
			materials.update(materials => {
				let i = materials.materials.findIndex(material => material.id == id)
				materials.materials[i].done = true
				return materials
			})
			goto('/quiz/materials')
		}else{
			showHint = true
			wrong = true
			strike++
		}
	}

	function handleInputClick() {
		showHint = false;
	}
</script>

<div class="material split-screen" class:extended>
	<div class="color-half">
		<div class="container">
			<p class="page-title">APPLY YOUR KNOWLEDGE</p>

			<div class="content">
				<h2 class="material-name">{ material.text }</h2>


				<div class="dot-circle">
					
					<Dots w={310} h={310} r={18} bind:wiggle fill={material.fill} />
					
				</div>

				<div class="stats">
					<div class="stat">
						<span>Mass</span>
						<span>{ material.mass }</span>
					</div>
					<div class="stat">
						<span>Start Temp</span>
						<span>{ material.startTemp }.0&deg;C</span>
					</div>
					<div class="stat">
						<span>Energy</span>
						<span>{ material.energy }.J</span>
					</div>
					<div class="stat">
						<span>End Temp</span>
						{#if heated}
							<span in:fade>{ material.endTemp }&deg;C</span>
						{:else}
							<button class="btn heat-btn orange" on:click={ handleHeatUp }><span class="text">Heat Up</span> <img class="lil-flame" src="/flame-solid.svg" alt="flame"></button>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- bigger half -->

	<div class="bigger-half">
		<div class="container">
			<form class="material-form" on:submit|preventDefault={handleFormSubmit}>
				<h2 class="instructions">Calculate the specific heat capacity.</h2>

				{#if strike < 3}
					<label>
						<input bind:this={inputEl} type="text" bind:value={answerString} on:click={handleInputClick} class:wrong={showHint}>
						{#if answerString.length}
							<span class="appender" transition:fly|local={{ x: 70 }} style={`left: calc(${jgOffset}ch + 1rem)`}>J/g°C</span>
						{/if}
					</label>
				{/if}

				{#if showHint}
					<div class="hint" transition:slide|local={{ duration: 500 }}>
						{#if strike < 3}
							<p><strong>HINT</strong></p>
							<p>For Reference:</p>
						{/if}

						{#if strike === 1}
							<img src="/firsthint.jpg" alt="Q = mcΔT">
						{:else if strike === 2}
							<img src={`/${material.hintImg}`} alt="Q = mcΔT">
						{:else}
							<p class="the-answer">The Answer is <strong>{ material.heatCapacity }J/g°C</strong></p>
						{/if}
					</div>
				{/if}

				{#if strike < 3}
					<button type="submit" class="btn" disabled={showHint || !answerString}>Submit</button>
				{:else}
					<a href="/quiz/materials" class="btn">Continue &nbsp;&rarr;</a>
				{/if}

				
				<p class="note">Note: Pay attention to significant figures when entering your answer!</p>
			</form>

		</div>
	</div>
</div>

<style lang="scss">
	.material{
		min-height: 100vh;
	}



	h2{
		text-align: center;
    font-size: 2.5rem;
    margin-top: 0;
	}

	.dot-circle{
		overflow: hidden;
    border-radius: 15rem;
    height: 18.5rem;
    width: 18.5rem;
    margin: 1rem auto;
    position: relative;
	}

	.bigger-half, .color-half{
		overflow: hidden;
		transition: all 300ms;
	}

	.extended{
		.color-half{
			flex: 1 1 100%;
			border-radius: 0px;
		}

		.bigger-half{
			flex: 0 0 0%;
			padding: 0;
		}
	}

	.stats{
    width: 100%;
    max-width: 44rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 1rem;
    margin-top: 2rem;

    .stat{
      font-size: 1.1rem;
      display: flex;
      align-items: center;
			justify-content: space-between;
			padding: 0 0.3rem;
      
      &:last-of-type, &:nth-of-type(3){
        padding-top: 1rem;
      }

      &:nth-of-type(odd){
        border-right: 1px solid #fff;
      }

      p{
        flex: 1 1 50%;
        text-align: center;
        margin: 0;
      }
    }
  }

	.bigger-half{
		text-align: left;

		.container{
			max-width: 60rem;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
		}

		.btn{
			margin-top: 2rem;
		}

		h2{
			font-size: 1.5em;
			text-align: left;
		}

		label{
			position: relative;
			display: block;

			.appender{
				font-size: 2rem;
				padding: 1rem;
				position: absolute;
				left: 1rem;
				top: 0;
				color: var(--grey);
				font-weight: 300;
				pointer-events: none;
				transition: left 250ms;
			}
		}
		input{
			font-size: 2rem;
			padding: 1rem;
			border: 2px solid var(--light);
			width: 100%;
			display: block;
			color: var(--grey);

			&:focus{
				border-color: var(--green);
				outline: var(--green);
			}

			&.wrong{
				border: solid 2px var(--red);
				outline: var(--red);
			}
		}
	}

	.note{
		font-size: 1.3rem;
		margin-top: 4rem;
	}

	.hint{
		max-width: 35rem;
	}

	.the-answer{
		font-size: 2rem;

		strong{
			color: var(--green);
		}
	}
</style>