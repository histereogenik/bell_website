const DEFAULT_SITE_URL = "https://www.bellnacif.com.br";

function normalizeSiteUrl(url?: string) {
  const trimmedUrl = url?.trim();

  if (!trimmedUrl) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol = /^https?:\/\//i.test(trimmedUrl)
    ? trimmedUrl
    : `https://${trimmedUrl}`;

  return withProtocol.replace(/\/+$/, "");
}

export function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.SITE_URL ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      process.env.VERCEL_PROJECT_PRODUCTION_URL ??
      process.env.VERCEL_URL,
  );
}

export function getAbsoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${getSiteUrl()}${normalizedPath}`;
}
