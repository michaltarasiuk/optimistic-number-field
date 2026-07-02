import { Link } from "@/components/link";
import styles from "./layout.module.css";

export default function ExamplesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.Layout}>
      <nav className={styles.Nav}>
        <Link href="/examples/toggle-button">Toggle Button</Link>
        <Link href="/examples/number-field">Number Field</Link>
      </nav>
      <main className={styles.Content}>{children}</main>
    </div>
  );
}
