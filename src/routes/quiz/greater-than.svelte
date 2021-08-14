<script>
	import { fly } from 'svelte/transition'
	
	let test = true
</script>

{#if test}
	<h1 in:fly={{ y: 20 }}>Hello</h1>
{:else}
	<h1 in:fly={{ y: 20 }}>Goodbye</h1>
{/if}
<button on:click={() => test = !test}>TEST</button>