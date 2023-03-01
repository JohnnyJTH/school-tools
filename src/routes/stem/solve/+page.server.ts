import type { PageServerLoad } from './$types';

export const load = (async ({ url, fetch }) => {
    if (!process.env.WOLFRAM_APP_ID) throw new Error("WOLFRAM_APP_ID not set");
    if (!url.searchParams.get("input")) throw new Error("No input provided");

    const response = await fetch(`https://api.wolframalpha.com/v2/query?input=${url.searchParams.get("input")}&format=image,plaintext&output=JSON&appid=${process.env.WOLFRAM_APP_ID}`);
    const result = await response.json();
    if (!result.queryresult.success) return {error: "Not succesful"};
    return {};
}) satisfies PageServerLoad