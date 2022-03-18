<script lang="ts">
	import { prices } from '$lib/data';
	import { currencyFormater, dateFormater } from '$lib/tools';
	import { onMount } from 'svelte';
	import Barcode from '$lib/Barcode.svelte';
	function normalize_code(value: string) {
		let numbersOnly = value.replace(/[^0-9]/g, '');
		let normalized = numbersOnly.padStart(13, '0').substring(0, 13);
		return normalized;
	}
	onMount(() => {});
    function groupIn(data: any[]) {
        let result = [];
        let group = [];
        data.forEach((item, index) => {
            group.push(item);
            if (group.length === 4) {
                result.push(group);
                group = [];
            }
        });
        if (group.length > 0) {
            result.push(group);
        }
        return result;
    }
</script>

<!-- <ul class="container">
	{#each groupIn(prices) as group, index1}
        <div class="block">
            {#each group as price, index2}
                <li class="card">
                    <Barcode value={normalize_code(price.barcode || '0')} elId={`code-${index1}-${index2}`} />
                    <div>
                        <h5 class="name">{price.name}</h5>
                        <h2 class="error deprecated">{currencyFormater.format(price.sale_price)}</h2>
                        <h1 class="success">
                            {currencyFormater.format(price.hot_price)}
                        </h1>
                        <p class="date">
                            válido hasta: {dateFormater.format(new Date(price.discount_end))}
                        </p>
                    </div>
                </li>
            {/each}
        </div>
	{/each}
</ul> -->
<div class="container">
	{#each prices as price, index}
                <div class="card">
                    <Barcode value={normalize_code(price.barcode || '0')} elId={`code-${index}`} />
                    <div>
                        <h5 class="name">{price.name}</h5>
                        <h2 class="error deprecated">{currencyFormater.format(price.sale_price)}</h2>
                        <h1 class="success">
                            {currencyFormater.format(price.hot_price)}
                        </h1>
                        <p class="date">
                            válido hasta: {dateFormater.format(new Date(price.discount_end))}
                        </p>
                    </div>
                </div>
	{/each}
            </div>

<style>
	.container {
		display: block;
		list-style: none;
	}
    .block{
        padding: 0;
        margin: 0;
        page-break-inside: avoid;
    }
	.card {
		background: #fff;
		padding: 0.1rem;
		/* border-radius: 5px; */
        width: 170px;
        height: 180px;
		border: 1px solid #000;
        display: inline-block;
		/* display: grid;
		grid-template-columns: 1fr 1fr; */
        page-break-inside: avoid;
		text-align: center;
        overflow: hidden;
	}
	.error {
		color: red;
	}

	.deprecated {
		text-decoration: line-through;
	}
	.success {
		color: green;
	}
	.name {
		text-transform: uppercase;
		font-size: 12px;
        height: 28px;
        text-overflow: ellipsis;
        overflow: hidden;
	}
	.date {
		font-size: 10px;
		font-weight: 600;
	}
    *{
        margin: 0;
        padding: 0;
    }
</style>
