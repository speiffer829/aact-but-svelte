<script>
	import { materials } from '$lib/store'
	import Dots from '$lib/components/Dots.svelte'
	import { goto } from '$app/navigation'

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
					<div class="box" on:click={goto(`/quiz/apply-your-knowledge/${material.id}`)}>
						<p class="text">{ material?.text }</p>
						<Dots w={200} h={200} r={material.done === true ? 20 : 100} fill={ material.fill } wiggle={material.done === true ? material.wiggle : 0} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.material{
		min-height: 100vh;
	}

	.content p, .content h2{
		text-align: left;
	}

.bigger-half .container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.material-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
  max-width: 60rem;
  .box{
    min-height: 16.8rem;
    box-shadow: var(--shadow);
    cursor: pointer;
		border-radius: 1rem;
		overflow: hidden;

    &.done{
      opacity: 0.6;
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
  }
}
  

</style>