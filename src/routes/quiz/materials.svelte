<script>
	import { materials } from '$lib/store'

	$: theMaterials = $materials.materials
</script>

<div class="material split-screen">

	<div class="color-half">
		<div class="container">
			<p class="page-title">APPLY YOUR KNOWLEDGE</p>

			<div class="content">
				<h2>Building A New Home</h2>
				<p>You will be testing the specific heat capacity of four sample materials to determine which ones you could use.</p>
				<p>The building materials you choose should have a heat capacity of at least 1.8 J/g°C.</p>
			</div>
		</div>
	</div>
	
	<div class="bigger-half">
		<div class="container">
			<div class="material-grid">
				{#each theMaterials as material}
					<div class="box">
						<p class="text">{ material?.text }</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.material{
		min-height: 100vh;
	}
</style>