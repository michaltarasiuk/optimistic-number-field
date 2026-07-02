import { Input as BaseInput } from "@base-ui/react/input";
import styles from "./input.module.css";

export function Input({
  className,
  ...props
}: React.ComponentProps<typeof BaseInput>) {
  return (
    <BaseInput
      className={className ? `${styles.Input} ${className}` : styles.Input}
      {...props}
    />
  );
}
