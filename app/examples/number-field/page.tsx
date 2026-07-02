"use client";

import { NumberField } from "@/components/number-field";
import * as React from "react";
import { updateAmount } from "./_action";

export default function Page() {
  const [amount, setAmount] = React.useState(0);
  const [optimisticAmount, setOptimisticAmount] = React.useOptimistic(amount);

  const id = React.useId();

  async function handleValueChange(newAmount: number | null) {
    if (newAmount === null) return;
    React.startTransition(async () => {
      setOptimisticAmount(newAmount);
      try {
        const updatedAmount = await updateAmount(newAmount);
        React.startTransition(() => {
          setAmount(updatedAmount);
        });
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <NumberField.Root
      id={id}
      value={optimisticAmount}
      onValueChange={handleValueChange}
    >
      <NumberField.Group>
        <NumberField.Decrement />
        <NumberField.Input />
        <NumberField.Increment />
      </NumberField.Group>
    </NumberField.Root>
  );
}
