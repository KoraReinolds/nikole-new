/**
 * Nuxt configuration file with updated PrimeVue theme settings.
 *
 * This file configures Nuxt modules and sets up the PrimeVue theme.
 * The secondary color has been overridden in the theme's properties.
 */

import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@primevue/nuxt-module",
    "@nuxtjs/google-fonts",
  ],
  imports: {
    dirs: [
      "types",
      "data",
      "data/db/ohlcv",
      "data/db/nodes",
      "data/db/dexie",
      "data/db/indicators",
      "data/binance",
      "data/indicators",
      "lib",
      "entities/graph",
      "components/nodes",
    ],
  },
  devtools: { enabled: true },
  css: ["primeicons/primeicons.css"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
        commaDangle: "always-multiline",
      },
    },
  },
  googleFonts: {
    families: {
      Raleway: [400, 500, 700],
      Roboto: [400, 500],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  primevue: {
    // components: {
    //   include: ["*"],
    //   exclude: ["DatePicker"],
    // },
    options: {
      theme: {
        preset: definePreset(Aura, {
          // components: {
          //   button: {
          //     extend: {
          //       accent: {
          //         color: "#000000",
          //       },
          //     },
          //   },
          // },
        }),
        extend: {
          colors: {
            root: {
              card: "#FFFFFF",
              header: "#F6F9FC",
              hover: "#EFF6FF",
              background: "#EDF1F6",
              border: "#DFE7EF",
            },
            text: {
              primary: "#495057",
              secondary: "#6C757D",
              tertiary: "#CED4DA",
              error: "#EA5455",
            },
            icon: {
              switch: "#CED4DA",
              default: "#6C757D",
              hover: "#343A40",
              active: "#3B82F6",
              white: "#FFFFFF",
            },
            primary: {
              blue: {
                default: "#3B82F6",
                hover: "#2563EB",
                active: "#1D4ED8",
                focus: {
                  border: "#BFDBFE",
                },
              },
              red: {
                default: "#EA5455",
                hover: "#DC2626",
                active: "#B91C1C",
                focus: {
                  border: "#FECACA",
                },
              },
              orange: {
                default: "#FF9F42",
                hover: "#D97706",
                active: "#B45309",
                focus: {
                  border: "#FDE68A",
                },
              },
              green: {
                default: "#29C76F",
                hover: "#16A34A",
                active: "#15803D",
                focus: {
                  border: "#BBF7D0",
                },
              },
            },
            secondary: {
              bluegray: {
                default: "#64748B",
                hover: "#475569",
                active: "#334155",
              },
            },
          },
        },
      },
    },
  },
});
