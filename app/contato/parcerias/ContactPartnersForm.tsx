"use client";

import { FormEvent, useState } from "react";
import styles from "../clientes/page.module.css";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactPartnersForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Não foi possível enviar sua mensagem.");
      }

      form.reset();
      setStatus("success");
      setMessage(data.message ?? "Mensagem enviada com sucesso.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem agora."
      );
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Nome completo</span>
        <input name="name" type="text" placeholder="Nome completo" required />
      </label>

      <label>
        <span>Empresa</span>
        <input name="company" type="text" placeholder="Nome da empresa" />
      </label>

      <label>
        <span>Especialidade</span>
        <input
          name="specialty"
          type="text"
          placeholder="Projetos em que atua"
          required
        />
      </label>

      <label>
        <span>E-mail</span>
        <input name="email" type="email" placeholder="Seu e-mail" required />
      </label>

      <label>
        <span>WhatsApp</span>
        <input
          name="whatsapp"
          type="tel"
          placeholder="+55 (11) 99999-9999"
          required
        />
      </label>

      <label>
        <span>Como acredita que podemos gerar valor juntos?</span>
        <textarea
          name="opportunity"
          placeholder="Descreva as oportunidades que visualiza"
          rows={3}
          required
        />
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "ENVIAR"}
      </button>

      {message ? (
        <p className={`${styles.formMessage} ${styles[status]}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
