import NextLink from "next/link";
import styles from "./link.module.css";

export function Link({
  className,
  ...props
}: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      className={className ? `${styles.Link} ${className}` : styles.Link}
      {...props}
    />
  );
}
