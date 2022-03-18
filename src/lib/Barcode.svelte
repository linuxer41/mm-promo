<script lang="ts">
	import { onMount } from 'svelte';
	import JsBarcode from 'jsbarcode';
	export let value = '';
	export let elId = '';
	onMount(() => {
		JsBarcode(`#${elId}`, value, {
			format: 'CODE128',
			width: 1,
			height: 40,
			displayValue: true,
			fontOptions: 'bold',
			font: 'monospace',
			textAlign: 'center',
			textPosition: 'bottom',
			textMargin: 2,
			fontSize: 10,
			background: '#ffffff',
			lineColor: '#000000'
		});
	});
</script>

<svg class="rotate" id={elId} />

<style>
	.rotate {
		transform: rotate(180deg);
	}
</style>
