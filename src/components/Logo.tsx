type LogoProps = {
  wordmarkClassName?: string;
  subtitleClassName?: string;
  showWordmark?: boolean;
  size?: number;
};

export default function Logo({
  wordmarkClassName = "text-ink",
  subtitleClassName = "text-brand-orange",
  showWordmark = true,
  size = 40,
}: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="16" fill="#1c1a17" />
        <path
          d="M17 26h24c0 14-5.5 22-12 22s-12-8-12-22z"
          fill="#faf6f0"
        />
        <path
          d="M41 28c5.5 0 9.5 3 9.5 8.5S46.5 45 41 45"
          fill="none"
          stroke="#faf6f0"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <ellipse cx="29" cy="50" rx="17" ry="3.5" fill="#e0742a" />
        <path
          d="M22 20c0-3.5 1.5-5.5 1.5-9"
          fill="none"
          stroke="#e0742a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M29 17c0-4.5 1.5-6.5 1.5-11"
          fill="none"
          stroke="#e0742a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M36 20c0-3.5 1.5-5.5 1.5-9"
          fill="none"
          stroke="#e0742a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <ellipse cx="29" cy="30" rx="9" ry="2.5" fill="#e0742a" opacity="0.35" />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-[1.35rem] font-semibold tracking-[0.06em] ${wordmarkClassName}`}>
            SKARA
          </span>
          <span className={`mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.28em] ${subtitleClassName}`}>
            Coffee
          </span>
        </span>
      )}
    </span>
  );
}
