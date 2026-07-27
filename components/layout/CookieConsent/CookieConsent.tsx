"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import styles from "./CookieConsent.module.css";

type ConsentStatus = "accepted" | "rejected" | "pending";

const CONSENT_COOKIE = "bell_cookie_consent";
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
const listeners = new Set<() => void>();

function getConsentCookie() {
  if (typeof document === "undefined") {
    return null;
  }

  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${CONSENT_COOKIE}=`))
      ?.split("=")[1] ?? null
  );
}

function setConsentCookie(value: Exclude<ConsentStatus, "pending">) {
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; SameSite=Lax`;
}

function getConsentSnapshot(): ConsentStatus {
  const savedConsent = getConsentCookie();

  if (savedConsent === "accepted" || savedConsent === "rejected") {
    return savedConsent;
  }

  return "pending";
}

function subscribeToConsent(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function notifyConsentListeners() {
  listeners.forEach((listener) => listener());
}

type CookieConsentProps = {
  gaId?: string;
};

export function CookieConsent({ gaId }: CookieConsentProps) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => "pending"
  );
  const hasAnalytics = Boolean(gaId);

  function handleConsent(value: Exclude<ConsentStatus, "pending">) {
    setConsentCookie(value);
    notifyConsentListeners();
  }

  return (
    <>
      {hasAnalytics && consent === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="bell-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {hasAnalytics && consent === "pending" ? (
        <aside
          className={styles.banner}
          aria-label="Preferências de cookies"
          role="dialog"
        >
          <div className={styles.copy}>
            <strong>Valorizamos a sua privacidade.</strong>
            <p>
              Usamos cookies para melhorar sua experiência de navegação, exibir
              anúncios ou conteúdo personalizados e analisar nosso tráfego. Ao
              clicar em &quot;Aceitar tudo&quot;, você concorda com o uso de
              cookies.
            </p>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={() => handleConsent("rejected")}>
              Rejeitar tudo
            </button>
            <button
              className={styles.primary}
              type="button"
              onClick={() => handleConsent("accepted")}
            >
              Aceitar tudo
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
