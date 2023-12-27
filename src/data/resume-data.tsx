import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { TelegramIcon } from "../components/icons/TelegramIcon";

import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "RokitG",
  initials: "RG",
  location: "Vigo, Spain, CEST",
  locationLink: "https://www.google.com/maps/place/Vigo",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
  "As a Full Stack Engineer, I have successfully developed multiple products from inception to launch. My focus is on building scalable solutions that not only satisfy user needs, but also have the capacity to scale as required. Currently, I primarily work with TypeScript, React, Node.js, and NextJS (version 13) and I feel comfortable with most Web3 environments.",  avatarUrl: "https://avatars.githubusercontent.com/u/125133357?s=400&u=419bb75bc4430b8e4f17df4ad4be63e442404dad&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "rokitg@hey.com",
    tel: "+34618501351",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rokitgg",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/0xRokit",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad de Vigo",
      degree: "Telecommunications installation technician.",
      start: "2018",
      end: "2022",
    },
    {
      school: "Self-Taught",
      degree: "All my knowledge about programming and Web3 comes from self-learning.",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "SolarLabs",
      link: "https://www.solarlabs.gg",
      badges: ["Remote", "Web3"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "Q1 2023",
      end: "Q2 2023",
      description:
      "Built various Web3 projects from scratch, leveraging technologies such as DrizzleORM and PlanetScale for optimal performance. Additional technologies used include React, TypeScript, and NextJS.",    },
    {
      company: "Funded",
      link: "https://dash.fundedeth.com/",
      badges: ["Remote"],
      title: "Lead Full Stack Developer",
      logo: ClevertechLogo,
      start: "Q2 2023",
      end: "Q3 2023",
      description:
        "Created the first version of the Funded Dashboard, which is a Web3 application that allows users to request, manage and follow trough their applications for a Funded Account. The application was built using NextJS, TypeScript, and PlanetScale, among other technologies.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "DrizzleORM",
    "React",
    "NextJS",
    "Tailwind",
    "PHP 8",
    "Laravel",
    "Wagmi",
    "SIWE",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
  ],
} as const;
