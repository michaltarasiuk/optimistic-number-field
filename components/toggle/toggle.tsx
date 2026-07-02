import { Toggle as BaseToggle } from "@base-ui/react/toggle";

import styles from "./toggle.module.css";

export function Toggle({
  className,
  ...props
}: React.ComponentProps<typeof BaseToggle>) {
  return (
    <BaseToggle
      className={className ? `${styles.Button} ${className}` : styles.Button}
      {...props}
    />
  );
}
