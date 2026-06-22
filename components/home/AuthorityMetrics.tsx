import { authorityMetrics } from "@/content/site";
import styles from "./AuthorityMetrics.module.css";

export function AuthorityMetrics() {
  return (
    <section className={styles.section} aria-label="Resultados e experiência">
      <div className={`container ${styles.list}`}>
        {authorityMetrics.map((metric) => (
          <article className={styles.row} key={metric.value}>
            <strong className={styles.value}>{metric.value}</strong>
            <div>
              <h2>{metric.title}</h2>
              <p>{metric.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
