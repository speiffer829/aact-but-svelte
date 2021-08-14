<script>
	import { onMount } from 'svelte'
	
	export let cx;
	export let cy;
	export let r;
	export let fill;
	export let id;
	export let wiggle;


</script>

<!-- <path 
      d="{`M ${(cx-r)}, ${cy} 
      a ${r}, ${r} 0 1, 1 ${r*2}, 0 
      a ${r}, ${r} 0 1, 1 -${r*2}, 0`}"
      fill="{`url(#${fill})`}"
      id="{`dot-${id}-${fill}`}"
			style="">
    </path> -->
{#key wiggle}
	<circle {cx} {cy} {r} 
	id={`dot-${id}-${fill}`}
	fill={`url(#${fill})`}
	style={
		`--posOneX: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posOneY: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posTwoX: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posTwoY: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posThreeX: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posThreeY: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posFourX: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posFourY: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posFiveX: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posFiveY: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posSixX: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;
		--posSixY: ${(Math.floor(Math.random() * wiggle) - wiggle * 2) * (Math.random() < 0.5 ? -1 : 1)}px;`
	} 
	/>
{/key}
