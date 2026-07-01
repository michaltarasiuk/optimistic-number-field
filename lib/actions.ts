"use server";

export async function updateAmount(newAmount: number) {
  await new Promise((resolve) => setTimeout(resolve, 2_000));
  return newAmount;
}
