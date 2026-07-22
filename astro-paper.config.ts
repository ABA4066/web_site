import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://burakafsar.com/",
    title: "Burak AFŞAR",
    description: "A page about my academic career in Astronomy and Astrophysics.",
    author: "Burak AFŞAR",
    profile: "https://burakafsar.com/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Istanbul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/ABA4066" },
    { name: "linkedin", url: "https://www.linkedin.com/in/burak-afsar" },
    { name: "mail",     url: "mailto:burakafsar4066@gmail.com" },
  ],
  shareLinks: [],
});