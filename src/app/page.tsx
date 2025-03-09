import { Case } from "@/Components/Case";
import styles from "./page.module.css";
import { Main } from "@/Components/Main";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Main />
      <Case />
    </div>
  );
}
