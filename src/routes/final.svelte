<script>
	import { resetAll } from '$lib/store'
</script>

<div class="final">
    <video class="vid" autoplay muted loop>
      <source src="/science.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video> 
    <div class="contain">
      <h1>Good Job!</h1>
      <p class="sub-title">You have the capacity for chemistry.</p>
      <button class="btn" on:click={resetAll}>Start Over</button>
    </div>
  </div>

	<style lang="scss">
		.final{
			min-height: 100vh;
		}

  .final{
    background: linear-gradient(rgba(var(--darkblueRGB) / 50%), rgba(var(--darkblueRGB) / 50%)), url('/final.jpg') no-repeat center;
    background-size: cover;
    width: 100%;
    min-height: -webkit-fill-available;
		min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    position: relative;

    &:after{
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(var(--darkblueRGB) / 60%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
      }

    .vid{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: 1;
    }

    .contain{
      backdrop-filter: blur(4px);
      padding: 1rem;
      position: relative;
      z-index: 5;
    }

    h1{
      margin-bottom: 0.2rem;
      font-size: 2.6rem;
    }

    .sub-title{
      font-weight: bold;
      color: #ffffff;
      margin-top: 0;
      margin-bottom: 3rem;
    }
  }

	</style>