"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const serviceOptions = [
  "Mentoria para Donos de Negócios",
  "Mentoria para Donas de Lojas Físicas",
  "Consultoria",
  "Treinamentos",
  "Palestras",
  "Outros",
];

const peopleOptions = [
  "Apenas eu",
  "2 a 10 pessoas",
  "11 a 30 pessoas",
  "31 a 100 pessoas",
  "Mais de 100 pessoas",
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

type DropdownFieldProps = {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function DropdownField({
  label,
  name,
  options,
  placeholder,
  value,
  onChange,
}: DropdownFieldProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonId = `${name}-button`;

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div className={styles.dropdownField} ref={dropdownRef}>
      <span className={styles.fieldLabel}>{label}</span>
      <input name={name} type="hidden" value={value} />
      <button
        id={buttonId}
        className={`${styles.dropdownTrigger} ${open ? styles.open : ""}`}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? styles.selectedValue : ""}>
          {value || placeholder}
        </span>
        <span className={styles.dropdownChevron} aria-hidden="true" />
      </button>

      {open ? (
        <div
          className={styles.dropdownMenu}
          role="listbox"
          aria-labelledby={buttonId}
        >
          {options.map((option) => (
            <button
              className={value === option ? styles.selectedOption : ""}
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              <span aria-hidden="true" />
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ContactClientsForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [people, setPeople] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Não foi possível enviar sua mensagem.");
      }

      form.reset();
      setService("");
      setPeople("");
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
        <span>Cargo</span>
        <input name="role" type="text" placeholder="Seu cargo" />
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

      <DropdownField
        label="Qual serviço você procura?"
        name="service"
        options={serviceOptions}
        placeholder="Selecione uma opção"
        value={service}
        onChange={setService}
      />

      <DropdownField
        label="Quantas pessoas estão envolvidas?"
        name="people"
        options={peopleOptions}
        placeholder="Selecione uma opção"
        value={people}
        onChange={setPeople}
      />

      <label>
        <span>Qual é o principal desafio para resolvermos?</span>
        <textarea
          name="challenge"
          placeholder="Descreva brevemente o cenário atual..."
          rows={3}
          required
        />
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Quero conversar com a Bell"}
      </button>

      {message ? (
        <p className={`${styles.formMessage} ${styles[status]}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
