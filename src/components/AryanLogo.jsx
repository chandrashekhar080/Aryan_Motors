function AryanLogo({ compact = false }) {
  return (
    <a className={compact ? 'aryan-logo compact' : 'aryan-logo'} href="#home" aria-label="Aryan Group home">
      <img
        src="/aryan-logo.png"
        alt="Aryan Group logo"
        className="aryan-logo-image"
        width="1354"
        height="768"
        decoding="async"
      />
      {/* <svg viewBox="0 0 420 150" role="img" aria-labelledby="aryan-logo-title">
        <title id="aryan-logo-title">Aryan Group - Symbol of Trust</title>
        <path
          d="M38 27c48-10 83 9 105 59C96 88 68 64 38 27Z"
          fill="#249a45"
        />
        <path
          d="M151 111C155 60 199 20 283 3c-53 40-81 79-85 118 43-7 82-44 121-116-80 12-139 50-168 106Z"
          fill="#16813d"
        />
        <path
          d="M137 42c29 25 27 70-5 114 41-28 59-73 37-118"
          fill="none"
          stroke="#caa34b"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <text x="142" y="92" fill="#057036" fontFamily="Georgia, serif" fontSize="49" fontWeight="900">
          ARYAN
        </text>
        <path d="M279 98h92" stroke="#caa34b" strokeWidth="4" strokeLinecap="round" />
        <text x="286" y="122" fill="#caa34b" fontFamily="Georgia, serif" fontSize="35" fontWeight="700">
          group
        </text>
        <rect x="108" y="126" width="212" height="18" rx="6" fill="#057036" />
        <text x="214" y="140" textAnchor="middle" fill="#f5e9c4" fontFamily="Verdana, sans-serif" fontSize="12" fontWeight="700" letterSpacing="2">
          SYMBOL OF TRUST
        </text>
      </svg> */}
    </a>
  )
}

export default AryanLogo
