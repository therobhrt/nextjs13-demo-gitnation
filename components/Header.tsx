import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link href="/" className="header__logo logo">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={33}
          >
            <path
              d="M13.14 24.772a2.302 2.302 0 01-2.312-2.274v-.079H8.472v.07c.035 2.552 2.155 4.591 4.73 4.557 2.522-.035 4.562-2.057 4.597-4.557v-.07h-2.355c.008.026.008.044.008.07 0 1.258-1.033 2.283-2.312 2.283zM8.612 9.739c-1.857 0-3.363 1.492-3.363 3.332 0 1.84 1.506 3.333 3.363 3.333s3.363-1.492 3.363-3.332c0-1.84-1.506-3.333-3.363-3.333zM7.544 13.08c0-.581.473-1.059 1.06-1.067.586 0 1.068.468 1.077 1.05a1.068 1.068 0 01-2.137.017zm-4.59-5.885c6.473-2.03 8.942-3.298 10.055-3.923 1.112.625 3.573 1.892 10.054 3.923 0 .73.412 22.889-10.054 22.871C2.543 30.075 2.945 7.925 2.954 7.196zM13.01 33c13.522.035 12.988-27.002 12.988-27.931C17.624 2.439 14.437.799 13.01 0 11.564.79 8.384 2.43.003 5.069c0 .929-.526 27.966 13.006 27.931zm1.086-21.126v2.24h6.507v-2.24h-6.507z"
              fill="#fff"
            />
          </svg>
          <span>GitNation</span>
        </Link>
        <a role="navigation" className={`_n-toggle burger header__burger `}>
          <div className="burger__icon"></div>
        </a>
      </div>
    </header>
  );
}
