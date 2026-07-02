"use server";

const NETWORK_DELAY_MS = 500;

export async function like(liked: boolean) {
  await new Promise((resolve) => setTimeout(resolve, NETWORK_DELAY_MS));
  return liked;
}
