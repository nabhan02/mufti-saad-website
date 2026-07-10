// Direct links to Mufti Saad's social profiles, with the Linktree hub shown
// separately below the platform icons.
const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/Saadhaque",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.622c-3.141 0-3.495.011-4.733.068-1.018.046-1.572.215-1.94.358-.487.19-.835.416-1.2.781-.365.365-.591.713-.781 1.2-.143.368-.312.922-.358 1.94-.057 1.238-.068 1.592-.068 4.733s.011 3.495.068 4.733c.046 1.018.215 1.572.358 1.94.19.487.416.835.781 1.2.365.365.713.591 1.2.781.368.143.922.312 1.94.358 1.238.057 1.592.068 4.733.068s3.495-.011 4.733-.068c1.018-.046 1.572-.215 1.94-.358.487-.19.835-.416 1.2-.781.365-.365.591-.713.781-1.2.143-.368.312-.922.358-1.94.057-1.238.068-1.592.068-4.733s-.011-3.495-.068-4.733c-.046-1.018-.215-1.572-.358-1.94-.19-.487-.416-.835-.781-1.2-.365-.365-.713-.591-1.2-.781-.368-.143-.922-.312-1.94-.358-1.238-.057-1.592-.068-4.733-.068zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@muftisaadh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@muftisaadhaque",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/haquesaad",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
  },
];

const LINKTREE_URL = "https://linktr.ee/saadhaque";

export function SocialIcons() {
  return (
    <div>
      <div className="flex gap-3">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              background: "oklch(96% 0.015 85 / 0.08)",
              border: "1px solid oklch(96% 0.015 85 / 0.12)",
              color: "var(--text-muted-on-dark)",
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <a
        href={LINKTREE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linktree"
        className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03]"
        style={{ background: "var(--gold-accent)", color: "var(--navy-deep)" }}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
        View my Linktree
      </a>
    </div>
  );
}
