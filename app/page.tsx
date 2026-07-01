"use client";

import { NumberField } from "@/components/number-field";
import { updateAmount } from "@/lib/actions";
import * as React from "react";

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
        setAmount(updatedAmount);
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
      <NumberField.ScrubArea>
        <NumberField.Label>Amount</NumberField.Label>
        <NumberField.ScrubAreaCursor />
      </NumberField.ScrubArea>
      <NumberField.Group>
        <NumberField.Decrement />
        <NumberField.Input />
        <NumberField.Increment />
      </NumberField.Group>
    </NumberField.Root>
  );
}
