<script>
	import Dots from '$lib/components/Dots.svelte'
	import {materials} from '$lib/store'
	import { fly } from 'svelte/transition'
	
	let picked = []
	let checkAll = false

	function handlePick(id) {
		if(!picked.includes(id)){
			picked = [...picked, id]
		}else{
			picked = picked.filter(p => p !== id)
		}
	}
</script>


<div class="full-width">
	<p class="page-title">Apply Your Knowledge</p>
	<h1 class="question">Which materials have a specific heat capacity greater than or equal to 1.8 J/g°C?</h1>

	<div class="answers">
		{#each $materials.materials as material (material.id)}
			<div class="answer" on:click={handlePick(material.id)}
				class:disabled={checkAll === true} 
				class:picked={picked.includes(material.id)}
				class:correct={checkAll === true && (material.heatCapacity >= 1.8 && picked.includes(material.id))}
				class:fade-correct={checkAll === true && (material.heatCapacity >= 1.8)}
				class:wrong={checkAll === true && (material.heatCapacity < 1.8 && picked.includes(material.id))}
				class:fade-wrong={checkAll === true && (material.heatCapacity < 1.8)}
				class:fade={checkAll === true && !picked.includes(material.id)}>
				<div class="box">
					<p class="text">{material.text}</p>
					<div class="dot-contain">
						<Dots gutter={true} fill={material.fill} wiggle={material.wiggle} w={180} h={180} r={15} />
					</div>
				</div>
				{#if checkAll}
					<div class="symbol-contain" in:fly={{ y: 20 }}>
          <div class="symbol-color">
						{#if material.heatCapacity >= 1.8 && picked.includes(material.id) || material.heatCapacity < 1.8 && !picked.includes(material.id)}
							<span class="symbol">
								&check;
							</span>
						{:else}
							<span class="symbol">
								&times;
							</span>
						{/if}
            <p class="heat-capacity-answer">{ material.heatCapacity } J/g&deg;C</p>
          </div>
        </div>
				{/if}
			</div>
		{/each}
	</div>

	{#if !checkAll}
		<button class="btn" on:click={() => checkAll = true} disabled={!picked.length}>Check Answers</button>
	{:else}
		<a href="/quiz/cost" class="btn" in:fly={{ x: 30 }}>Continue &nbsp;&rarr;</a>
	{/if}
	
</div>


<style lang="scss">
	.disabled{
		pointer-events: none;
	}
</style>