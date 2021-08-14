<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script>
	import '$lib/assets/global.scss'
	import PageTrans from '$lib/components/PageTrans.svelte'

	export let key
</script>

<div class="app">
	<PageTrans {key}>
		<slot />
	</PageTrans>
</div>

<style>
	.app{
		min-height: 100vh;
	}
</style>