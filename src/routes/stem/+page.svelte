<svelte:head>
	<title>JohnnyJTH - Tools - STEM</title>
	<meta name="description" content="Answers any STEM related question." />
</svelte:head>

<script lang="ts">
    import { goto } from "$app/navigation";

	let input = "";
	$: link = `/stem/solve?input=${encodeURIComponent(input)}`;
</script>

<input bind:value={input} class="input input-bordered" type="text"/>
<button on:click={() => goto(link)} class="btn btn-primary">Solve</button>