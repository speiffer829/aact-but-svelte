<script>
	export let currentStep = -1;
	export let stepThrough = false;
</script>

<p class:stepThrough><span class:highlight={currentStep === 0}>Q</span> = <span class:highlight={currentStep === 1}>m</span><span class:highlight={currentStep === 2}>c</span><span class:highlight={currentStep === 3}>ΔT</span></p>

<style>
p{
  font-size: 6rem;
  font-weight: bold;
	color: var(--darkblue);
	transition: all 300ms;
}

.stepThrough{
  color: #B1B9BF;
}

span{
	transition: color 300ms;
}

.highlight{
	color: var(--darkblue);
}
</style>