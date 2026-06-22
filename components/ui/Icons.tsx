type IconProps = {
  size?: number;
  className?: string;
};

export function SearchIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" />
      <path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ size = 26, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 26 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 2h24M1 10h24M1 18h24" stroke="currentColor" />
    </svg>
  );
}

export function CloseIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m4 4 16 16M20 4 4 20" stroke="currentColor" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 12, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m1 1.5 5 5 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 28, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 10h29M22 2l8 8-8 8" stroke="currentColor" />
    </svg>
  );
}
