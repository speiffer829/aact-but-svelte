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
	import '$lib/assets/flame-solid.svg'
	import { materials } from '$lib/store'
	import Dots from '$lib/components/Dots.svelte'
	import { fade } from 'svelte/transition'

	export let id;

	let wiggle = .3
	let extended = true
	let heated = false


	$: material = $materials.materials.filter(m => m.id == id)[0]

	function handleHeatUp() {
		heated = true;
		wiggle = material.wiggle
		extended = false

		console.log('wiggle:', wiggle)
	}
</script>

<div class="material split-screen" class:extended>
	<div class="color-half">
		<div class="container">
			<p class="page-title">APPLY YOUR KNOWLEDGE</p>

			<div class="content">
				<h2 class="material-name">{ material.text }</h2>


				<div class="dot-circle">
					<Dots w={310} h={300} r={18} bind:wiggle fill={material.fill} />
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
		test
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
</style>