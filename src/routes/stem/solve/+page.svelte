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
    {#if data.redirect}
        <meta name="description" content="Redirecting..." />
    {:else}
        <meta name="description" content={`The solution for the question ${data.result[0].steps[0].text}`} />
    {/if}
</svelte:head>

{#if data.redirect}
    <div class="w-full h-screen flex justify-center items-center">
        <h1 class="text-4xl">Redirecting...</h1>
    </div>
{:else}
    {#each data.result as result}
        <div class="w-full border rounded-lg p-4">
            <h1>{result.title}</h1>
            {#each result.steps as step}
                <img src={step.img} alt={step.text} />
            {/each}
        </div>
    {/each}
{/if}
