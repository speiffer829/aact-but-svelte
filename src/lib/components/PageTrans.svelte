<script>
	import { fly } from 'svelte/transition'
	export let key
</script>

{#key key}
	<div in:fly={{ x: 500, duration: 500 }}>
		<slot />
	</div>
{/key}