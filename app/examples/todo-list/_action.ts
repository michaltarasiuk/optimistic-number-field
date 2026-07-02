"use server";

import type { Todo } from "./page";

const NETWORK_DELAY_MS = 500;

export async function addTodo(todo: Todo) {
  await new Promise((resolve) => setTimeout(resolve, NETWORK_DELAY_MS));
  return {
    ...todo,
    pending: false,
  } satisfies Todo;
}

export async function removeTodo(_id: string) {
  await new Promise((resolve) => setTimeout(resolve, NETWORK_DELAY_MS));
  return true;
}

export async function toggleTodo(_id: string) {
  await new Promise((resolve) => setTimeout(resolve, NETWORK_DELAY_MS));
  return true;
}
