"use client";

import { like } from "@/app/examples/toggle-button/_action";
import { HeartFilledIcon, HeartOutlineIcon } from "@/components/icons";
import { Toggle } from "@/components/toggle";
import * as React from "react";

export default function Page() {
  const [linked, setLiked] = React.useState(false);
  const [optimisticLiked, setOptimisticLinked] = React.useOptimistic(linked);

  function handlePressedChange(newLiked: boolean) {
    React.startTransition(async () => {
      setOptimisticLinked(newLiked);
      try {
        const updatedLiked = await like(newLiked);
        React.startTransition(() => {
          setLiked(updatedLiked);
        });
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <Toggle
      aria-label="Favorite"
      pressed={optimisticLiked}
      onPressedChange={handlePressedChange}
      render={(props, state) => {
        if (state.pressed) {
          return (
            <button type="button" {...props}>
              <HeartFilledIcon />
            </button>
          );
        }
        return (
          <button type="button" {...props}>
            <HeartOutlineIcon />{" "}
          </button>
        );
      }}
    />
  );
}
