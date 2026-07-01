import * as React from "react";

export function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

export function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M1.5 8h13M8 14.5v-13" />
    </svg>
  );
}

export function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M1.5 8h13" />
    </svg>
  );
}
