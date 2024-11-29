export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DocEye",
  description: "Doctor portal website!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Deals",
      href: "/deals",
    },
    {
      label: "What's New",
      href: "/whatsNew",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Deals",
      href: "/deals",
    },
    {
      label: "What's New",
      href: "/whatsNew",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
