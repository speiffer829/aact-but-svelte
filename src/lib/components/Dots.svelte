<script>
	import Dot from '$lib/components/Dot.svelte'
	import { onMount } from 'svelte'
	
	export let w = 100;
	export let h = 100;
	export let fill = 'blue';
	export let wiggle = 0;
	export let r = 100
	export let style;
	let dots = []

	function timeToMakeTheDots(){
      let x = r;
      let y = r;
      let newDot
      let i = 0
      
      while(y < w + r){
        newDot = {
          id: i,
          cx: x,
          cy: y
        }

        i++

      dots = [...dots, newDot]

        
        if(x + r * 2 > w) {
          y+=r*2
          x=r
        }else{
          x+=r*2
        }

        newDot ={}
      }
    }

		onMount(() => timeToMakeTheDots())
</script>

<div {style}>
    <div class="dot-container">
      <svg width="{w}" height="{h}" viewBox="0 0 {w} {h}" class="dots">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="80%" fy="80%">
            <stop offset="0%" style="stop-color: #eee; stop-opacity: 0.2;" />
            <stop offset="50%" style="stop-color: #eee; stop-opacity: .2;" />
            <stop offset="100%" style="stop-color:#444; stop-opacity: 0.4;" />
          </radialGradient>
          <radialGradient id="orange" cx="50%" cy="50%" r="50%" fx="80%" fy="80%">
            <stop offset="0%" style="stop-color: rgb(240,148,98); stop-opacity: 1;" />
            <stop offset="50%" style="stop-color:rgb(243,108,33); stop-opacity: 1;" />
            <stop offset="100%" style="stop-color:rgb(173,67,9); stop-opacity: 1;" />
          </radialGradient>
          <radialGradient id="blue" cx="50%" cy="50%" r="50%" fx="80%" fy="80%">
            <stop offset="0%" style="stop-color:#71abd6; stop-opacity: 1;" />
            <stop offset="50%" style="stop-color:#447CBB; stop-opacity: 1;" />
            <stop offset="100%" style="stop-color:#0b5185; stop-opacity: 1;" />
          </radialGradient>
          <radialGradient id="green" cx="50%" cy="50%" r="50%" fx="80%" fy="80%">
            <stop offset="0%" style="stop-color:#8cf0e2; stop-opacity: 1;" />
            <stop offset="50%" style="stop-color:#47BFAF; stop-opacity: 1;" />
            <stop offset="100%" style="stop-color:#118071; stop-opacity: 1;" />
          </radialGradient>
          <radialGradient id="yellow" cx="50%" cy="50%" r="50%" fx="80%" fy="80%">
            <stop offset="0%" style="stop-color:#f0eb8a; stop-opacity: 1;" />
            <stop offset="50%" style="stop-color:#dad344; stop-opacity: 1;" />
            <stop offset="100%" style="stop-color:#9b951c; stop-opacity: 1;" />
          </radialGradient>
        </defs>
        <g id="dots" class={fill}>
					{#each dots as dot}
          	<Dot id={dot.id} cx={dot.cx} cy={dot.cy} {r} {fill} {wiggle} />
					{/each}
        </g>
      </svg>
    </div>
  </div>

	<style>
		svg :global(circle){
			animation: wiggle infinite 400ms;
		}
		@keyframes -global-wiggle{
			start{
				transform: translate3d(0, 0, 0);
			}
			15%{
				transform: translate3d(var(--posOneX), var(--posOneY), 0);
			}
			30%{
				transform: translate3d(var(--posTwoX), var(--posTwoY), 0);
			}
			45%{
				transform: translate3d(var(--posThreeX), var(--posThreeY), 0);
			}
			60%{
				transform: translate3d(var(--posFourX), var(--posFourY), 0);
			}
			75%{
				transform: translate3d(var(--posFiveX), var(--posFiveY), 0);
			}
			90%{
				transform: translate3d(var(--posSixX), var(--posSixY), 0);
			}
			end{
				transform: translate3d(0,0,0);
			}
		}
	</style>