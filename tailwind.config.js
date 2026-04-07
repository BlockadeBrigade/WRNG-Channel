/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist Mono", "monospace"],
        victor: ["Victor Mono", "monospace"],
        roboto: ["Roboto Mono", "monospace"],
        akira: ["Akira", "monospace"],
      },
      keyframes: {
        scrollSliding: {
          "0%": {
            opacity: 0,
            transform: "translateY(2vmin)",
          },
          "20%": {
            opacity: 1,
            transform: "translateY(0.5vmin)",
          },
          "80%": {
            opacity: 1,
            transform: "translateY(-0.5vmin)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-2vmin)",
          },
        },
        maskedText: {
          "0%": {
            "background-position": "0 50%",
          },
          "100%": {
            "background-position": "100% 50%",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        aurora: {
          "0%, 100%": {
            backgroundPosition:
              "center, 50% 50%, 30% 100%, 100% 10%, 23% 23%, 0% 80%",
          },
          "33.333%": {
            backgroundPosition:
              "center, 10% 75%, 40% 80%, 60% 20%, 43% 23%, 16% 30%",
          },
          "66.666%": {
            backgroundPosition:
              "center, 25% 35%, 80% 50%, 10% 10%, 66% 5%, 30% 0%",
          },
        },
        strike: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
      },
      backgroundImage: {
        "aura-gradient": `
          radial-gradient(transparent 0, transparent 20%),
          radial-gradient(at 62% 9%, darkorange 0px, transparent 50%),
          radial-gradient(at 69% 60%, purple 0px, transparent 50%),
          radial-gradient(at 24% 89%, darkviolet 0px, transparent 50%),
          radial-gradient(at 51% 77%, darkblue  0px, transparent 50%),
          radial-gradient(at 78% 92%, darkmagenta 0px, transparent 50%)
          `,
      },
      animation: {
        aurora: "animateAurora 15s linear infinite ",
        scrollSliding: "scrollSliding 3s linear 1s infinite",
        maskedText: "maskedText 4s linear infinite alternate",
        typing: "typing 2s steps(15) infinite alternate, blink .7s infinite",
        strike: "strike 1s linear forwards",
      },
    },
  },
  plugins: [],
}
