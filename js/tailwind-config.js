/* Debe cargarse DESPUÉS del CDN de Tailwind (cdn.tailwindcss.com). */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#081c34",
          navy: "#0B2545",
          blue: "#0A2E68",
          cobalt: "#134e9e",
          gold: "#E5A93C",
          goldLight: "#FBE8BD",
          wa: "#25D366",
          waDark: "#1EBE5D",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -4px rgba(11, 37, 69, 0.08)",
        float: "0 12px 36px -4px rgba(10, 46, 104, 0.22)",
        "glow-gold": "0 0 24px -2px rgba(229, 169, 60, 0.35)",
        "glow-wa": "0 0 20px -2px rgba(37, 211, 102, 0.45)",
      },
    },
  },
};
