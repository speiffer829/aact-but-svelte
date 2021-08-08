<script>
	import { equation } from '$lib/store'
	import Equation from '$lib/components/Equation.svelte'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { flip } from 'svelte/animate'
	import { fly, fade } from 'svelte/transition'


	let showIntro = true;
	let stepThrough = false;
	let currentStep = 0;
	let finished = false;
	let showSteps = []


	onMount(() => showSteps = [$equation.steps[0]])


	function stepUp(){
		currentStep += 1
		showSteps = [...showSteps, $equation.steps[currentStep]]
		if($equation.steps.length === currentStep + 1) finished = true
	}
	function moveOn(){
		goto('/quiz/materials')
	}

</script>

  <div class="split-40-60">
    <div class="col-40">
      <div class="container">
        <p class="page-title">Introduction: Specific Heat Equation</p>

				{#if showIntro}
          <div class="intro" >
            <p class="name">{ $equation.name }</p>
            <p class="desc">{ $equation.description }</p>
          </div>
					{:else}
          <div class="steps-contain">
							{#each showSteps as step (step.text)}
								<div class="step" in:fly={{ x: -400, duration: 300 }} animate:flip>
									<p class="var">{ step.variable }</p>
									<p class="text">{ @html step.text }</p>
								</div>
							{/each}
          </div>
				{/if}

        <div class="button-contain">
					{#if !showIntro}
						<button class="btn" on:click={finished === false ? stepUp : moveOn}>{ @html finished === false ? 'Next Variable' : 'Apply Your Knowledge &RightArrow;' }</button>
					{:else}
						<button class="btn" on:click={() => {showIntro = false; stepThrough = true}}>Define Variables &RightArrow;</button>
					{/if}

        </div>
      </div>
    </div>

    <div class="col-60">
      <div class="contain">
          <p class="equation">
						<Equation bind:currentStep bind:stepThrough />
          </p>
      </div>
    </div>
  </div>


<style lang="scss">
	.step{
		transition: all 300ms;
	}

	.step:last-of-type{
		font-size: 150%;
	}



.split-40-60{
  display: grid;
  grid-template-columns: 40% 60%;

  .col-60{
    background: var(--lightgrey);
    display: flex;

    .contain{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }

  .col-40{
    display: flex;
    justify-content: flex-end;
    .container{
      max-width: 600px;
      width: 100%;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      height: 100%;

      .header{
        text-align-last: left;
        margin: 2rem 0;
        width: 100%;
        text-transform: uppercase;
        font-weight: bold;
        flex: 0 0 auto;
      }

      
    }
  }
}

.intro{
  margin-top: 5rem;
  text-align: left;
  font-size: 1.5rem;
  flex: 1 1 auto;

  .name{
    font-weight: bold;
    font-size: 1.6rem;
  }
}

.steps-contain{
  flex: 1 1 auto;
}

.steps-contain{
  display: flex;
  flex-direction: column;

  .step{
    display: flex;
    text-align: left;
    flex: 0 0 auto;
    opacity: 0.5;
    transition: all 500ms;

    


    .var{
      flex: 0 0 auto;
      margin-right: 0.5rem;
      font-weight: bold;
      font-size: 1.3rem;
      line-height: .5rem;
      transition: all 500ms;
    }

    .text{
      font-size: 1rem;
      transition: all 500ms;
    }

    &:last-of-type{
      flex: 1 1 auto;
      opacity: 1;

      .var{
        font-size: 2rem;
        line-height: 1.2rem;
      }

      .text{
        font-size: 1.2rem;
      }
    }

    &.steps-enter{
      opacity: 0;
      transform: translateX(-200%);
    }
  }
}

.button-contain{
  flex: 0 0 5rem;
  display: flex;
  justify-content: flex-end;
  padding-left: 2rem;
  align-items: flex-start;
}


.equation{
  font-size: 6rem;
  font-weight: bold;
  color: #B1B9BF;
	transition: all 300ms;
}

:global(.highlight){
	color: var(--darkblue);
}



</style>