import type { PageServerLoad } from './$types';
import { WOLFRAM_APP_ID } from '$env/static/private'

export const load = (async ({ url, fetch }) => {
    if (!url.searchParams.get("input")) return { redirect: "/stem/" };
    if (!WOLFRAM_APP_ID) return { error: "No Wolfram App ID (This is not an error you can fix)" };

    const response = await fetch(`https://api.wolframalpha.com/v2/query?input=${url.searchParams.get("input")}&format=image,plaintext&output=JSON&appid=${WOLFRAM_APP_ID}`);
    const result = await response.json();
    if (!result.queryresult.success) return { error: "Not succesful" };
    return { result: result.queryresult.pods.map((pod: any) => ({ title: pod.title, steps: pod.subpods.map((subpod: any) => ({text: subpod.plaintext, img: subpod.img.src})) })) };
}) satisfies PageServerLoad