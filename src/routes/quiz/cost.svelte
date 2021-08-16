<script>
	import { getCosts } from '$lib/store'
	import { fly, slide } from 'svelte/transition'
	import Dots from '$lib/components/Dots.svelte'

	let checkAll = false
	let picked;
</script>

<div class="full-width cost">
	<p class="page-title">Apply Your Knowledge</p>
	<h1 class="question">Which Material is More Cost Efficient?</h1>

	<div class="two-answers">
		{#each $getCosts as material (material.id)}
			<div class="answer"
			on:click={() => picked = material.id}
			class:picked={picked === material.id}
      class:correct={checkAll === true && (material.correctCost === true && picked === material.id || material.correctCost === false && picked !== material.id)}
      class:wrong={checkAll === true && (material.correctCost === true && picked !== material.id || material.correctCost === false && picked === material.id)}
      class:fade={checkAll === true && picked !== material.id}>
				<div class="box">
          <p class="text">{material.text}</p>
          <Dots fill={material.fill} wiggle={material.wiggle} w={200} h={200} r={20} gutter={true} />
        </div>
				{#if !checkAll}
          <div class="rows" out:slide>
            <div class="row">
              <p>Material Costs</p>
              <p>{ material.materialCosts }</p>
            </div>
            <div class="row">
              <p>Labor</p>
              <p>{ material.labor }</p>
            </div>
            <div class="row">
              <p>Total Time</p>
              <p>{ material.totalTime } Hrs</p>
            </div>
          </div>
					
				{/if}

				{#if checkAll}
				<div class="symbol-contain" in:fly={{ y: 20 }}>
          <div class="symbol-color">
						{#if material.correctCost === true && picked === material.id || material.correctCost === false && picked !== material.id}
            <span class="symbol">
              &check;
            </span>
						{:else}
            <span class="symbol">
              &times;
            </span>
						{/if}
            <p class="heat-capacity-answer">Total = ${ material.totalCost }</p>
          </div>
        </div>
				{/if}
			</div>
		{/each}

	</div>
	{#if !checkAll}
		<button class="btn" disabled={picked === undefined} on:click={() => checkAll = true}>Check Answer</button>
	{:else}
		<p class="explination" in:fly={{ y: 30 }}>Total cost = Materials cost + (Labor cost)(Time)</p>
		<a href="/final" class="btn">Continue</a>
	{/if}
</div>

<style lang="scss">

  
  .cost{
    max-width: 69rem;
    margin: 0 auto;
    padding: 3rem;

    .question{
      font-size: 2rem;
      font-weight: bold;
      margin-top: 3rem;
    }

    .two-answers{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 2rem 0;

      .answer{
        cursor: pointer;
        margin: 0 3rem;
        flex: 0 0 18rem;
        display: block;
        position: relative;

        .symbol-contain{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;

          .symbol-color{
            width: 80%;
            border-radius: 0.5rem;
            
            .symbol{
              font-size: 3.3rem;
              display: block;
              padding: 1rem;
              padding-bottom: 0.5rem;
            }

            p{
              margin: 0;
              margin-bottom: 1rem;
              font-size: 1.2rem;
            }

          }

        }

        .box{
          min-height: 18rem;
          box-shadow: var(--shadow);
          margin-bottom: 2rem;
          border: solid 1px transparent;
          
        }

        .row{
            display: flex;

            p{
              flex: 1 1 70%;
              padding: 0.5rem .2rem;
              text-align: left;
              font-size: 1.3rem;
              margin: 0;

              &:last-of-type{
                flex: 0 0 30%;
              }
            }
          }
        

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

        &.correct{
          .box{
            border-color: var(--green);
          }

          .symbol-color{
            background: rgba(var(--greenRGB));
            color: #ffffff;
            font-weight: bold;
            text-shadow: 1px 1px 0 green;

            @supports(backdrop-filter: blur(5px)){
              backdrop-filter: blur(5px);
              background: rgba(var(--greenRGB) / 80%);
            }
          }
        }

        &.wrong{
          .box{
            border-color: var(--red);
          }

          .symbol-color{
            background: rgba(var(--redRGB));
            color: #ffffff;
            font-weight: bold;
            text-shadow: 1px 1px 0 red;

            @supports(backdrop-filter: blur(5px)){
              backdrop-filter: blur(5px);
              background: rgba(var(--redRGB) / 80%);
            }
          }
        }

        &.fade{
          .box{
            opacity: 0.5;
          }

          .symbol-color{
            background: var(--light);
            font-weight: bold;
            text-shadow: 1px 1px 0 var(--dark);

            .symbol{
              display: none;
            }

            .heat-capacity-answer{
              padding: 1rem 0;
              margin: 0;
              color: #000000;
            }

            @supports(backdrop-filter: blur(5px)){
              backdrop-filter: blur(5px);
              background: rgba(var(--lightRGB) / 80%);
            }
          }
        }
      }
    }
  }

  .explination{
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }


</style>