/**
 * Chef Raquel — Tailwind preset
 * Uso: en tailwind.config.js -> { presets: [require('./design-system/tailwind.preset.js')] }
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: "#FFF0D1",
        terracotta: {
          DEFAULT: "#DC7739",
          hover: "#C66B33",
          pressed: "#B05F2E",
        },
        "green-dark": "#035541",
        "green-light": "#E0E699",
        brown: "#5C2C15",
        ink: "#2C2C2C",
        whatsapp: { DEFAULT: "#25D366", hover: "#1FB357", pressed: "#199447" },
        error: "#C0392B",
        border: "#E0D2AE",
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
        ko: ['"Black Han Sans"', 'sans-serif'],
      },
      borderRadius: {
        sm: "8px", md: "16px", lg: "24px", xl: "28px", pill: "999px",
      },
      spacing: {
        xs: "8px", sm: "16px", md: "24px", lg: "40px", xl: "64px", "2xl": "96px",
      },
      boxShadow: {
        card: "0 8px 30px rgba(92, 44, 21, 0.08)",
      },
    },
  },
};
