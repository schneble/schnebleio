export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "js",
  description: "Developer",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  pages: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "works",
      href: "/works",
    },
    {
      label: "BlackRoulette",
      href: "/blackroulette",
    },
    {
        label: "Allview",
        href: "/allview",
      },
  ],
  links: {
    github: "https://github.com/j-schneble",
    brsource: "https://github.com/j-schneble/blackroulette",
    roulette: "https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme",
  },
};
