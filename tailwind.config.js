module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 70%': { transform: 'translateX(7ch)' },
          '75%, 80%': { transform: 'translateX(8ch)' },
          '85%, 90%': { transform: 'translateX(9ch)' },
          '95%, 100%': { transform: 'translateX(11ch)' },
        },
      },
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        custom: {

        "primary": "#1EB854",
                
        "secondary": "#1FD65F",
                
        "accent": "#D99330",
                
        "neutral": "#110E0E",
                
        "base-100": "#171212",
                
        "info": "#3ABFF8",
                
        "success": "#36D399",
                
        "warning": "#FBBD23",
                
        "error": "#F87272",
        },
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "forest",
  },
};
