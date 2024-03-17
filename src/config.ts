import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sqlnotes.nikhilanand.page/", // replace this with your deployed domain
  author: "Nikhil Anand",
  desc: "My solutions for the SQL problems on LeetCode with additional notes",
  title: "SQL Notes",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/NikSWE/sqlnotes",
    linkTitle: `Explore the repository on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anand-nikhil/",
    linkTitle: `Connect with me on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:nikhil.anand@nyu.edu",
    linkTitle: `Send me an Email`,
    active: true,
  },
];
