import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import styles from "./checkbox.module.css";

export function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof BaseCheckbox.Root>) {
  return (
    <BaseCheckbox.Root
      className={className ? `${styles.Checkbox} ${className}` : styles.Checkbox}
      {...props}
    />
  );
}

export function CheckboxIndicator({
  className,
  ...props
}: React.ComponentProps<typeof BaseCheckbox.Indicator>) {
  return (
    <BaseCheckbox.Indicator
      className={className ? `${styles.Indicator} ${className}` : styles.Indicator}
      {...props}
    />
  );
}
