<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    onMount(() => {
        if (data.redirect) goto(data.redirect);
    });
</script>

<svelte:head>
    <title>JohnnyJTH - STEM - Solution</title>
    <meta name="description" content={`The solution for the question ${data.result[0].steps[0].text}`} />
</svelte:head>

{#each data.result as result}
    <div class="w-full border rounded-lg p-4">
        <h1>{result.title}</h1>
        {#each result.steps as step}
            <img src={step.img} alt={step.text} />
        {/each}
    </div>
{/each}
