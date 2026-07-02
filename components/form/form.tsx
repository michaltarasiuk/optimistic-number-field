import { Form as BaseForm } from "@base-ui/react/form";
import styles from "./form.module.css";

export function Form({
  className,
  ...props
}: React.ComponentProps<typeof BaseForm>) {
  return (
    <BaseForm
      className={className ? `${styles.Form} ${className}` : styles.Form}
      {...props}
    />
  );
}
