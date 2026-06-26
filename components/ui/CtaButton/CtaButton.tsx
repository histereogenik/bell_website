import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./CtaButton.module.css";

type CtaButtonVariant = "orange" | "black";

type CtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
  variant?: CtaButtonVariant;
};

const defaultLabels: Record<CtaButtonVariant, string> = {
  orange: "Quero clarear meus próximos passos",
  black: "Quero falar com a Bell",
};

export function CtaButton({
  children,
  className,
  variant = "orange",
  ...props
}: CtaButtonProps) {
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classNames} {...props}>
      {children ?? defaultLabels[variant]}
    </a>
  );
}
