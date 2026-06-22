import Image from "next/image";
import { clients } from "@/content/site";
import styles from "./ClientsSection.module.css";

export function ClientsSection() {
  return (
    <section className={styles.section} aria-labelledby="clients-title">
      <div className="container">
        <h2 id="clients-title">Clientes</h2>
        <div className={styles.carousel}>
          <div className={styles.track}>
            {[...clients, ...clients].map((client, index) => (
              <div
                className={styles.logoCard}
                key={`${client.name}-${index}`}
                aria-hidden={index >= clients.length}
              >
                <Image
                  src={client.image}
                  alt={index < clients.length ? client.name : ""}
                  width={360}
                  height={220}
                  sizes="180px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
