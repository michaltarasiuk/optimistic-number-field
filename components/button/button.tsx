import { Button as BaseButton } from "@base-ui/react/button";
import styles from "./button.module.css";

export function Button({
  className,
  ...props
}: React.ComponentProps<typeof BaseButton>) {
  return (
    <BaseButton
      className={className ? `${styles.Button} ${className}` : styles.Button}
      {...props}
    />
  );
}
