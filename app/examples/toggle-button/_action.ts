"use server";

const NETWORK_DELAY_MS = 500;

export async function updateLiked(liked: boolean) {
  await new Promise((resolve) => setTimeout(resolve, NETWORK_DELAY_MS));
  return liked;
}
