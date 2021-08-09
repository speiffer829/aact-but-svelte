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
	import { materials } from '$lib/store'
	import Dots from '$lib/components/Dots.svelte'
	export let id;
	let wiggle = .3

	$: material = $materials.materials.filter(m => m.id == id)[0]
</script>

<div class="material split-screen extended">
	<div class="color-half">
		<div class="container">
			<p class="page-title">APPLY YOUR KNOWLEDGE</p>

			<div class="content">
				<h2 class="material-name">{ material.text }</h2>

				<div class="dot-circle">
					<Dots w={310} h={300} r={18} bind:wiggle fill={material.fill} />
				</div>
			</div>
		</div>
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

	.bigger-half{
		overflow: hidden;
	}

	.extended{
		.color-half{
			flex: 1 1 100%;
			border-radius: 10px;
		}
	}
</style>