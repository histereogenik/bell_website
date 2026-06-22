import Image from "next/image";
import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  large?: boolean;
  inverted?: boolean;
};

export function BrandLogo({
  large = false,
  inverted = false,
}: BrandLogoProps) {
  return (
    <span
      className={`${styles.logo} ${large ? styles.large : ""} ${
        inverted ? styles.inverted : ""
      }`}
    >
      <Image
        src={large ? "/logos/bell-nacif-footer.png" : "/logos/bell-nacif.png"}
        alt="Bell Nacif"
        width={large ? 2880 : 336}
        height={large ? 864 : 101}
        sizes={large ? "(max-width: 600px) 94vw, 88vw" : "168px"}
        priority={!large}
      />
    </span>
  );
}
