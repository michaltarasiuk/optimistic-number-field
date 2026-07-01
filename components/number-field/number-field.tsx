import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { CursorGrowIcon, MinusIcon, PlusIcon } from "../icons";

import styles from "./number-field.module.css";

function Root({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Root>) {
  return (
    <BaseNumberField.Root
      className={className ? `${styles.Field} ${className}` : styles.Field}
      {...props}
    >
      {children}
    </BaseNumberField.Root>
  );
}

function ScrubArea({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.ScrubArea>) {
  return (
    <BaseNumberField.ScrubArea
      className={className ? `${styles.ScrubArea} ${className}` : styles.ScrubArea}
      {...props}
    >
      {children}
    </BaseNumberField.ScrubArea>
  );
}

function ScrubAreaCursor({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.ScrubAreaCursor>) {
  return (
    <BaseNumberField.ScrubAreaCursor
      className={className ? `${styles.ScrubAreaCursor} ${className}` : styles.ScrubAreaCursor}
      {...props}
    >
      <CursorGrowIcon />
    </BaseNumberField.ScrubAreaCursor>
  );
}

function Label({
  children,
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      className={className ? `${styles.Label} ${className}` : styles.Label}
      {...props}
    >
      {children}
    </label>
  );
}

function Group({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Group>) {
  return (
    <BaseNumberField.Group
      className={className ? `${styles.Group} ${className}` : styles.Group}
      {...props}
    >
      {children}
    </BaseNumberField.Group>
  );
}

function Input({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Input>) {
  return (
    <BaseNumberField.Input
      className={className ? `${styles.Input} ${className}` : styles.Input}
      {...props}
    />
  );
}

function Decrement({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Decrement>) {
  return (
    <BaseNumberField.Decrement
      className={className ? `${styles.Decrement} ${className}` : styles.Decrement}
      {...props}
    >
      <MinusIcon />
    </BaseNumberField.Decrement>
  );
}

function Increment({
  className,
  ...props
}: React.ComponentProps<typeof BaseNumberField.Increment>) {
  return (
    <BaseNumberField.Increment
      className={className ? `${styles.Increment} ${className}` : styles.Increment}
      {...props}
    >
      <PlusIcon />
    </BaseNumberField.Increment>
  );
}

export const NumberField = {
  Root,
  ScrubArea,
  ScrubAreaCursor,
  Label,
  Group,
  Input,
  Decrement,
  Increment,
};
