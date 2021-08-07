
<script>
	import Dots from '$lib/components/Dots.svelte'
	import { goto } from '$app/navigation'

	let answered = false
	let chosen = null
	let answers = [
        {
          id: 1,
          text: 'Substance A',
          fill: 'orange',
          correct: true,
          wiggle: 1.5
        },
        {
          id: 2,
          text: 'Substance B',
          fill: 'yellow',
          correct: false,
          wiggle: 1.2
        },
      ]

		function pickAnswer(i){
      if(this.answered !== true) this.chosen = i
    }
    function checkAnswer(){
      this.answered = true
    }
    function moveOn(){
      goto('/review/equation')
    }
</script>

  <div class="dot-question">
    <div class="container">
      <div class="top-row">
        <p class="page-title">Introduction: Heat Capacity</p>
      </div>

      <div class="question-contain">
        <h2 class="question">Which Particles Are Moving Faster?</h2>

        <div class="answers">
					{#each answers as answer, index (answer.id)}
						<div on:click={() => pickAnswer(index)}
						class:picked={index === chosen}
						class="answer"
						style={`pointerEvents: ${answered === true ? 'none' : 'auto'} `}>
							<p class="text">{answer.text}</p>
							<Dots fill={answer.fill} wiggle={answer.wiggle} w={150} h={150} r={40} />
						</div>
					{/each}
        </div>

        <div class="explination-contain">
					{#if answered}
            <p class="explination">
              The particles in Substance A are moving faster because their temperature is higher.
            </p>
					{/if}

        </div>

        <button class="btn" on:click={answered === false ? checkAnswer : moveOn} disabled={chosen === null}>
          { answered === true ? 'Continue &RightArrow;' : 'Submit Answer' }
        </button>
        
      </div>
    </div>
  </div>

<style lang="scss">
  .container{
    max-width: 80rem;
    margin: 0 auto;
    padding: 3rem;

    .top-row{
      .title{
        text-align-last: left;
        padding: 3rem 3rem 2rem;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--grey);
      }
    }

    .question-contain{
      margin-top: 5rem;
      
      .question{
        font-size: 2rem;
        font-weight: bold;
        margin-top: 5rem;
      }

      .explination-contain{
        max-width: 35rem;
        height: 3rem;
        margin: 2rem auto 1rem;
      }
    }
  }

  .answers{
    display: grid;
    grid-template-columns: 12.8rem 12.8rem;
    grid-gap: 2rem;
    margin: 0 auto;
    width: 27.6rem;

    .answer{
      min-height: 12.8rem;
      box-shadow: 2px 2px 5px rgba(var(--dark), 0.5);
      cursor: pointer;
      

      .text{
        background: var(--light);
        margin: 0;
        padding: 1rem;
        margin-bottom: 1rem;
        transition: all 250ms;
      }

      &:hover{
        .text{
          background: var(--blue);
          color: #ffffff;
        }
      }

      &.picked{
        .text{
          background: var(--green);
          color: #ffffff;
        }
      }
    }
  }
</style>