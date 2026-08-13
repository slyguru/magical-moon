import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://azurebrian.dev/", // Replace with your actual domain when ready
    title: "Azure Brian",
    description: "Cyber Defense Analyst, Technical Mentor, and Independent Security Consultant.",
    author: "Brian Wafula",
    profile: "https://azurebrian.dev/about", // You can also change this to your LinkedIn URL
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Africa/Nairobi",
    dir: "ltr",
    googleVerification: "nk4Vu7GZ9KtlKdfqizo9V07-6yOnUUgTpGfonLcVRfU",
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
      enabled: false, // Set to false so it doesn't point visitors to the default Astro repo
      // url: "https://github.com/yourusername/your-repo/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/yourusername" },
    { name: "x",        url: "https://x.com/yourusername" },
    { name: "linkedin", url: "https://www.linkedin.com/in/yourusername/" },
    { name: "mail",     url: "mailto:yourmail@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
