<script>
	import Dots from '$lib/components/Dots.svelte'
	
	let wiggleA = .2
	let wiggleB = 0.2
	let heated = false
	let thermA = 10
	let thermB = 10

		function heatUp(){
      wiggleA = .5
      wiggleB = .3
      heated = true
      thermA = 70
      thermB = 50
    }

    function unHeat(){
      wiggleA = 0.7
      wiggleB = 0.7
      heated = false
      thermA = 10
      thermB = 10
    }
</script>

  <div class="half-grad home">
    <div class="titles-row">
      <h3>Substance A</h3>
      <h3>Substance B</h3>
    </div>
    <div class="compare">

      <div class="therm-contain .therm1">
        <div class="therm-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="97" viewBox="0 0 44 97">
						<g id="Group_1" data-name="Group 1" transform="translate(-154 -168)">
							<path id="Exclusion_1" data-name="Exclusion 1" d="M-314-238h-44v-69h44v69Zm-22-59a4,4,0,0,0-4,4v49h8v-49A4,4,0,0,0-336-297Z" transform="translate(512 475)" fill="#fff"/>
							<circle id="Ellipse_2" data-name="Ellipse 2" cx="13" cy="13" r="13" transform="translate(163 234)" fill="#eb5757"/>
							<ellipse id="Ellipse_3" data-name="Ellipse 3" cx="5.5" cy="4" rx="5.5" ry="4" transform="translate(173 249)" fill="#fff"/>
							<g id="Rectangle_1" data-name="Rectangle 1" transform="translate(168 174)" fill="none" stroke="#4f4f4f" stroke-width="3">
								<path d="M8,0H8a8,8,0,0,1,8,8V59a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V8A8,8,0,0,1,8,0Z" stroke="none"/>
								<path d="M8,1.5H8A6.5,6.5,0,0,1,14.5,8V56.2a1.3,1.3,0,0,1-1.3,1.3H2.8a1.3,1.3,0,0,1-1.3-1.3V8A6.5,6.5,0,0,1,8,1.5Z" fill="none"/>
							</g>
							<path id="Path_1" data-name="Path 1" d="M529.148,541.459l.286-3.415,3.666-1.714,5.144,1.714.922,6-12.85.821" transform="translate(-358 -307)" fill="#eb5757"/>
							<g id="Ellipse_1" data-name="Ellipse 1" transform="translate(158 229)" fill="none" stroke="#4f4f4f" stroke-width="3">
								<circle cx="18" cy="18" r="18" stroke="none"/>
								<circle cx="18" cy="18" r="16.5" fill="none"/>
							</g>
						</g>
					</svg>
          <div class="bar-contain">
            <div class="bar" style="{`height: ${thermA}%`}"></div>
          </div>
        </div>
      </div>


      <div class="substance-contain substance-a">
        <div class="dots-container">
          <div class="dots-circle">
            <Dots fill={"orange"} wiggle={wiggleA} w={230} h={230} r={15} style='margin-left:-.2rem; margin-top: -.2rem;' />
          </div>
        </div>
      </div>


      <div class="amt-box">
        <div class="box">
          <p class="title">Equal Amounts</p>
          <div class="line">
            <span class="left">Mass</span>
            <span class="right">100. g</span>
          </div>
          <div class="line">
            <span class="left">Energy</span>
            <span class="right">1000. J</span>
          </div>

          <div class="btn-contain" 
          style="{`justify-content: ${heated ? 'space-between' : 'center'}`}">
						{#if heated}
							<button class="btn hollow" on:click={unHeat}>Reset</button>
							<a href="/review/what-changed" class="btn" on:click={heatUp}>Continue</a>
						{:else}
							<button class="heat-btn btn orange" on:click={heatUp}><span class="text">Heat Up</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M192 0C79.7 101.33 0 220.92 0 300.55 0 425.05 78.95 512 192 512s192-86.95 192-211.45C384 220.6 303.78 100.86 192 0zm0 448c-70.58 0-128-52.89-128-117.89 0-44.13 25.84-71.51 34.34-79.76 3.12-3.12 8.19-3.12 11.31 0a7.98 7.98 0 0 1 2.34 5.66v40c0 30.93 25.07 56 56 56s56-25.07 56-56c0-72-112.64-64.77-39.43-164.33 2.89-3.93 7.48-4.16 10.58-3.17 1.62.53 5.38 2.24 5.38 6.78 0 33.55 25.05 54.97 51.57 77.63 33.38 28.54 67.9 58.04 67.9 117.21C320 395.11 262.58 448 192 448z"/></svg></button>
						{/if}
          </div>
        </div>
      </div>


      <div class="substance-contain substance-b">
        <div class="dots-container">
          <div class="dots-circle">
            <Dots fill={"yellow"} wiggle={wiggleB} w={230} h={230} r={15} />
          </div>
        </div>
      </div>


      <div class="therm-contain therm2">
        <div class="therm-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="97" viewBox="0 0 44 97">
						<g id="Group_1" data-name="Group 1" transform="translate(-154 -168)">
							<path id="Exclusion_1" data-name="Exclusion 1" d="M-314-238h-44v-69h44v69Zm-22-59a4,4,0,0,0-4,4v49h8v-49A4,4,0,0,0-336-297Z" transform="translate(512 475)" fill="#E5E5E5"/>
							<circle id="Ellipse_2" data-name="Ellipse 2" cx="13" cy="13" r="13" transform="translate(163 234)" fill="#eb5757"/>
							<ellipse id="Ellipse_3" data-name="Ellipse 3" cx="5.5" cy="4" rx="5.5" ry="4" transform="translate(173 249)" fill="#E5E5E5"/>
							<g id="Rectangle_1" data-name="Rectangle 1" transform="translate(168 174)" fill="none" stroke="#4f4f4f" stroke-width="3">
								<path d="M8,0H8a8,8,0,0,1,8,8V59a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V8A8,8,0,0,1,8,0Z" stroke="none"/>
								<path d="M8,1.5H8A6.5,6.5,0,0,1,14.5,8V56.2a1.3,1.3,0,0,1-1.3,1.3H2.8a1.3,1.3,0,0,1-1.3-1.3V8A6.5,6.5,0,0,1,8,1.5Z" fill="none"/>
							</g>
							<path id="Path_1" data-name="Path 1" d="M529.148,541.459l.286-3.415,3.666-1.714,5.144,1.714.922,6-12.85.821" transform="translate(-358 -307)" fill="#eb5757"/>
							<g id="Ellipse_1" data-name="Ellipse 1" transform="translate(158 229)" fill="none" stroke="#4f4f4f" stroke-width="3">
								<circle cx="18" cy="18" r="18" stroke="none"/>
								<circle cx="18" cy="18" r="16.5" fill="none"/>
							</g>
						</g>
					</svg>
          <div class="bar-contain">
            <div class="bar" style="{`height: ${thermB}%`}"></div>
          </div>
        </div>
      </div>


    </div>
  </div>

<style lang="scss">
	.titles-row{
    display: flex;
    padding-top: 3rem;
    flex: 0 0 auto;

    h3{
      flex: 1 1 50%;
      display: block;
    }
  }

  .therm-box{
    position: relative;

    img{
      position: relative;
      z-index: 3;
    }

    .bar-contain{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 30%;

      .bar{
        width: 20%;
        background: var(--red);
        border-radius: 10px 10px 0 0;
        transition: height 500ms;
      }
    }
  }
  
  
  .compare{
    display: flex;
    // height: calc( 100vh - 6.7rem);
    flex: 1 1 auto;
    // min-height: -webkit-fill-available;

    .therm-contain{
      flex: 1 1 6.25rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      .therm-box{
        margin-bottom: 3rem;
      }
    }

    .substance-contain{
      flex: 1 1 22rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3{
        flex: 0 0 auto;
        padding: 3rem;
      }

      .dots-container{
        flex: 1 1 auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .dots-circle{
          border-radius: 100%;
          overflow: hidden;
          height: 14rem;
          width: 14rem;

          svg { margin-left: -1rem; margin-top: -1rem; width: 16rem; max-width: none; }

        }

      }
    }

    .amt-box{
      flex: 1 1 18rem;
      display: flex;
      align-items: center;
      justify-content: center;
      

      .box{
        box-shadow: 2px 2px 5px rgba(var(--darkRGB) / 50%);
        background: #ffffff;
        width: 100%;
        border: solid 1px var(--dark);

        p{
          padding: 0.5rem;
          margin: 0;
          border-bottom: solid 1px var(--dark);
        }

        .title{
          padding: 0.5rem;
          background: var(--light);
          margin: 0;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.2rem;
          color: var(--grey);
        }

        .line{
          display: flex;
          border-bottom: solid 1px var(--dark);
          font-size: 1.1rem;

          .left{
            flex: 1 1 50%;
            padding: 1rem;
          }
          .right{
            flex: 1 1 50%;
            padding: 1rem;
          }
        }

        .btn-contain{
          padding: .5rem;
          background: var(--light);
          display: flex;
          justify-content: space-between;

          .hollow.btn{
            border-color: transparent;
          }
        }
      }
    }
  }

</style>