import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, Tag, Icon } from "@once-ui-system/core";
import { getImagePath } from "@/utils/paths";

const person: Person = {
  firstName: "Loïc",
  lastName: "Sainton",
  name: `Loïc Sainton`,
  role: "Etudiant",
  avatar: getImagePath("/images/avatar.jpg"),
  email: "sainton.loic1@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lolopada",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/loic-sainton/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  }
];

const home: Home = {
  path: "/",

  label: "Home",
  title: `${person.name}`,
  description: `Portfolio présentant mon travail en tant qu'${person.role}`,
  headline: (
    <>
      <span className="gradient-headline">
        LOIC SAINTON
      </span>
      <br />
      <span className="gradient-subheadline">
        Explorer. Apprendre. Coder.
      </span>
    </>
  ),
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Curieux de nature, j’aime explorer de nouvelles technos et coder des solutions dès que j'en ai besoin.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Actuellement en 2ème année de BUT Informatique à l'IUT de Fontainebleau,
        je recherche un stage de 8 semaines minimum à compter de fin mars/début avril 2026.

      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          "Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
          "Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: getImagePath("/images/projects/project-01/cover-01.jpg"),
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          "Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.",
          "Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formation",
    institutions: [
      {
        name: "Bachelor Universitaire de Technologie Informatique",
        description: (
          <>
            Université Paris-Est Créteil, IUT Fontainebleau-Sénart (77) • 2024 - 2027
          </>
        ),
        details: [
          {
            label: "Parcours A ",
            value: "Réalisation d'applications : conception, développement, validation"
          }
        ]
      },
      {
        name: "Baccalauréat Général",
        description: (
          <>
            Lycée Lafayette, Champagne sur Seine (77) • 2024
          </>
        ),
        details: [
          {
            label: "Spécialités ",
            value: "Sciences du Numérique et de l'Informatique (NSI) et Mathématiques"
          },
          {
            label: "Option ",
            value: "Mathématiques Expertes"
          }
        ]
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences techniques",
    skills: [
      {
        title: "Java",
        icon: "java",
      },
      {
        title: "Python",
        icon: "python",
      },
      {
        title: "HTML",
        icon: "html",
      },
      {
        title: "CSS",
        icon: "css",
      },
      {
        title: "JavaScript",
        icon: "javascript",
      },
      {
        title: "Next.js",
        icon: "nextjs",
      },
      {
        title: "Git",
        icon: "git",
      },
      {
        title: "Docker",
        icon: "docker",
      },
      {
        title: "PostgreSQL",
        icon: "postgresql",
      },
      {
        title: "MySQL",
        icon: "mysql",
      },
      {
        title: "C",
        icon: "c",
      },
      {
        title: "Android SDK",
        icon: "android",
      },
      {
        title: "PHP",
        icon: "php",
      },
      {
        title: "StarUML",
        icon: "FaStar",
      },
      {
        title: "PlantUML",
        icon: "PiPlantFill",
      },
      {
        title: "LibGDX",
        icon: "libgdx",
      },
      {
        title: "Linux / Bash",
        icon: "linux",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: getImagePath("/images/gallery/EGYPTE_VOLANTIS_2023_035.JPG"),
      alt: "EGYPTE VOLANTIS 2023 035",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/EGYPTE_VOLANTIS_2023_046.JPG"),
      alt: "EGYPTE VOLANTIS 2023 046",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/EGYPTE_VOLANTIS_2023_120.JPG"),
      alt: "EGYPTE VOLANTIS 2023 120",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/EGYPTE_VOLANTIS_2023_207.JPG"),
      alt: "EGYPTE VOLANTIS 2023 207",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/EGYPTE_VOLANTIS_2023_331.JPG"),
      alt: "EGYPTE VOLANTIS 2023 331",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/EGYPTE_VOLANTIS_2023_368.JPG"),
      alt: "EGYPTE VOLANTIS 2023 368",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/EGYPTE_VOLANTIS_2023_526.JPG"),
      alt: "EGYPTE VOLANTIS 2023 526",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/Egypte St John's_20230430_0007.jpeg"),
      alt: "Egypte St John's 20230430 0007",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/Egypte St John's_20230503_0216.jpeg"),
      alt: "Egypte St John's 20230503 0216",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/IMG-20230507-WA0037.jpg"),
      alt: "IMG 20230507 WA0037",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/IMG_20230504_171907.jpg"),
      alt: "IMG 20230504 171907",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/VID-20230507-WA0003.mp4"),
      alt: "VID 20230507 WA0003",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
