import { Field as BaseField } from "@base-ui/react/field";
import styles from "./field.module.css";

export function Field({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      className={className ? `${styles.Field} ${className}` : styles.Field}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      className={className ? `${styles.Label} ${className}` : styles.Label}
      {...props}
    />
  );
}
