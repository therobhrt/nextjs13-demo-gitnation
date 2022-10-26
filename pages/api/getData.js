const events = [
  {
    brand: {
      domain: "https://testjssummit.com",
      icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
      name: "TestJS Summit",
    },
    endDate: "2022-11-04T20:00:00.000Z",
    id: 38,
    multipassValue: 80,
    name: "TestJS Summit 2022",
    noExactDate: false,
    slug: "testjs-summit-2022",
    startDate: "2022-11-03T15:00:00.000Z",
    ticketsURL: "https://ti.to/gitnation/testjs-summit-2022",
  },
  {
    brand: {
      domain: "https://remixconf.eu/",
      icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1661425206/dev/guI6jYXx_400x400_nfiekh.jpg",
      name: "Remix Conf Europe",
    },
    endDate: "2022-11-18T20:00:00.000Z",
    id: 81,
    multipassValue: 80,
    name: "Remix Conf Europe 2022",
    noExactDate: false,
    slug: "remix-conf-europe-2022",
    startDate: "2022-11-18T15:00:00.000Z",
    ticketsURL: "https://ti.to/gitnation/remix-conf-europe-2022",
  },
  {
    brand: {
      domain: "https://reactday.berlin/",
      icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1657225787/udbtwudbhkfg8fl0ljey.png",
      name: "React Day Berlin",
    },
    endDate: "2022-12-05T20:00:00.000Z",
    id: 80,
    multipassValue: 80,
    name: "React Day Berlin 2022",
    noExactDate: false,
    slug: "react-day-berlin-2022",
    startDate: "2022-12-02T07:00:00.000Z",
    ticketsURL: "https://ti.to/gitnation/react-day-berlin-2022",
  },
  {
    brand: {
      domain: "https://graphqlgalaxy.com/",
      icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376733/uarnshqg7wbmzij54j8v.jpg",
      name: "GraphQL Galaxy",
    },
    endDate: "2022-12-09T20:00:00.000Z",
    id: 73,
    multipassValue: 80,
    name: "GraphQL Galaxy 2022",
    noExactDate: false,
    slug: "graphql-galaxy-2022",
    startDate: "2022-12-08T15:00:00.000Z",
    ticketsURL: "https://ti.to/gitnation/graphql-galaxy-2022",
  },
  {
    brand: {
      domain: "https://nodecongress.com/",
      icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
      name: "Node Congress",
    },
    endDate: "2023-02-17T20:00:00.000Z",
    id: 74,
    multipassValue: 80,
    name: "Node Congress 2023",
    noExactDate: true,
    slug: "node-congress-2023",
    startDate: "2023-02-16T08:00:00.000Z",
    ticketsURL: null,
  },
  {
    brand: {
      domain: "https://jsgamedev.com/",
      icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1647879927/cvshszqwtjjosdjrnj06.jpg",
      name: "JS GameDev Summit",
    },
    endDate: "2023-04-06T22:00:00.000Z",
    id: 75,
    multipassValue: 75,
    name: "JS GameDev Summit 2023",
    noExactDate: true,
    slug: "js-gamedev-summit-2023",
    startDate: "2023-04-05T22:00:00.000Z",
    ticketsURL: "",
  },
  {
    brand: {
      domain: "https://typescriptcongress.com/",
      icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1643199820/usy8dobn3lrbp60y1er6.png",
      name: "TS Congress",
    },
    endDate: "2023-04-28T20:00:00.000Z",
    id: 77,
    multipassValue: 80,
    name: "TypeScript Congress 2023",
    noExactDate: true,
    slug: "typescript-congress-2023",
    startDate: "2023-04-28T10:00:00.000Z",
    ticketsURL: null,
  },
  {
    brand: {
      domain: "https://vuejslive.com",
      icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1621500214/fcizntw4zinyl8pzu058.png",
      name: "Vue.js London",
    },
    endDate: "2023-05-08T20:00:00.000Z",
    id: 37,
    multipassValue: 80,
    name: "Vue.js London 2023",
    noExactDate: false,
    slug: "vuejs-london-2022",
    startDate: "2023-05-05T07:00:00.000Z",
    ticketsURL: "https://ti.to/gitnation/vuejs-london-2022",
  },
  {
    brand: {
      domain: "https://jsnation.com",
      icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
      name: "JS Nation",
    },
    endDate: "2023-06-05T19:00:00.000Z",
    id: 78,
    multipassValue: 150,
    name: "JSNation 2023",
    noExactDate: false,
    slug: "jsnation-2023",
    startDate: "2023-06-01T07:00:00.000Z",
    ticketsURL: "https://ti.to/gitnation/jsnation-2023",
  },
  {
    brand: {
      domain: "https://reactsummit.com",
      icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
      name: "React Summit",
    },
    endDate: "2023-06-06T19:00:00.000Z",
    id: 79,
    multipassValue: 250,
    name: "React Summit 2023",
    noExactDate: true,
    slug: "react-summit-2023",
    startDate: "2023-06-02T07:00:00.000Z",
    ticketsURL: "https://ti.to/gitnation/react-summit-2023",
  },
  {
    brand: {
      domain: "https://devopsjsconf.com",
      icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376976/wqgt95tr1tys6lspnv0q.png",
      name: "DevOps.js",
    },
    endDate: "2024-03-21T23:00:00.000Z",
    id: 40,
    multipassValue: 80,
    name: "DevOps.js Conf 2024",
    noExactDate: true,
    slug: "devopsjs-conf-2023",
    startDate: "2024-03-19T23:00:00.000Z",
    ticketsURL: null,
  },
];

const contents = [
  [
    {
      access: 0,
      category: 0,
      duration: 27,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: true,
      id: 726,
      image: null,
      slug: "inside-fiber-the-in-depth-overview-you-wanted-a-tldr-for",
      tags: [
        {
          label: "react 18",
        },
        {
          label: "react",
        },
        {
          label: "deep dive",
        },
      ],
      title: "Inside Fiber: the in-depth overview you wanted a TLDR for",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653414694/m0ohn2gr426i9iu4ujdw.jpg",
          company: "Medallia",
          id: 9853,
          name: "Matheus Albuquerque",
          nickname: "matheus_albuquerque",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 20,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: true,
      id: 803,
      image: null,
      slug: "solidjs-reactivity-unchained",
      tags: [
        {
          label: "builders and founders",
        },
        {
          label: "reactivity",
        },
        {
          label: "frameworks",
        },
      ],
      title: "SolidJS: Reactivity Unchained",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1630331672/f6uhsu3yd1twa3tual7x.jpg",
          company: "eBay",
          id: 3121,
          name: "Ryan Carniato",
          nickname: "ryan_carniato",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 28,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: true,
      id: 773,
      image: null,
      slug: "full-stack-documentation",
      tags: [
        {
          label: "svelte",
        },
        {
          label: "frameworks",
        },
        {
          label: "documentation",
        },
      ],
      title: "Full Stack Documentation",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653492605/swyiiajsbe8vjtronoxq.jpg",
          company: "Vercel",
          id: 9880,
          name: "Rich Harris",
          nickname: "rich_harris",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 33,
      event: {
        brand: {
          domain: "https://jsgamedev.com/",
          icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1647879927/cvshszqwtjjosdjrnj06.jpg",
          name: "JS GameDev Summit",
        },
        endDate: "2022-04-08T20:00:00.000Z",
        id: 36,
        name: "JS GameDev Summit 2022",
        slug: "webgamedev-summit-2022",
        startDate: "2022-04-07T14:00:00.000Z",
      },
      featured: true,
      id: 680,
      image: null,
      slug: "optimizing-html5-games-10-years-of-learnings",
      tags: [
        {
          label: "performance",
        },
        {
          label: "game engine",
        },
        {
          label: "game development",
        },
      ],
      title: "Optimizing HTML5 Games: 10 Years of Learnings",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1642517423/ynss6ysu29q1cp9i9biq.jpg",
          company: "PlayCanvas",
          id: 7839,
          name: "Will Eastcott",
          nickname: "will_eastcott",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 34,
      event: {
        brand: {
          domain: "https://jsgamedev.com/",
          icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1647879927/cvshszqwtjjosdjrnj06.jpg",
          name: "JS GameDev Summit",
        },
        endDate: "2022-04-08T20:00:00.000Z",
        id: 36,
        name: "JS GameDev Summit 2022",
        slug: "webgamedev-summit-2022",
        startDate: "2022-04-07T14:00:00.000Z",
      },
      featured: true,
      id: 671,
      image: null,
      slug: "making-awesome-games-with-littlejs",
      tags: [
        {
          label: "game engine",
        },
        {
          label: "game development",
        },
      ],
      title: "Making Awesome Games with LittleJS",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1642513073/uumpdacjrdwcf3gccxix.jpg",
          company: "Game Designer, Software Engineer",
          id: 7838,
          name: "Frank Force",
          nickname: "frank_force",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 136,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: true,
      id: 839,
      image: null,
      slug: "remix-fundamentals",
      tags: [
        {
          label: "remix",
        },
        {
          label: "web development",
        },
      ],
      title: "Remix Fundamentals",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1663241015/dev/Kent_C._Dodds_cekgpk.jpg",
          company: "Epic React",
          id: 2038,
          name: "Kent C. Dodds",
          nickname: "kent_c_dodds",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 27,
      event: {
        brand: {
          domain: "https://devopsjsconf.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376976/wqgt95tr1tys6lspnv0q.png",
          name: "DevOps.js",
        },
        endDate: "2022-03-25T20:00:00.000Z",
        id: 22,
        name: "DevOps.js Conf 2022",
        slug: "devops-conf-2022",
        startDate: "2022-03-24T15:00:00.000Z",
      },
      featured: true,
      id: 642,
      image: null,
      slug: "why-is-ci-so-damn-slow",
      tags: [
        {
          label: "ci cd",
        },
        {
          label: "devops",
        },
      ],
      title: "Why is CI so Damn Slow?",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1644943572/wm5yalk9oske57xxuzre.jpg",
          company: "Rome Tools",
          id: 7988,
          name: "Nicholas Yang",
          nickname: "nicholas_yang",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 34,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: true,
      id: 615,
      image: null,
      slug: "nodejs-compatibility-in-deno",
      tags: [
        {
          label: "deno",
        },
        {
          label: "node.js",
        },
      ],
      title: "Node.js Compatibility in Deno",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1643969810/ef1kn9uzi0gwmh8us1nq.jpg",
          company: "Deno",
          id: 7911,
          name: "Bartek Iwanczuk",
          nickname: "bartek_iwanczuk",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 20,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: true,
      id: 813,
      image: null,
      slug: "the-wind-and-the-waves-the-formation-of-framework-waves-from-the-epicenter",
      tags: [
        {
          label: "frameworks",
        },
        {
          label: "angular",
        },
      ],
      title:
        "The Wind and the Waves: The formation of Framework Waves from the Epicenter",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653494063/p845g4y7pbzinmdyo31k.jpg",
          company: "Google",
          id: 9887,
          name: "Sarah Drasner",
          nickname: "sarah_drasner",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 33,
      event: {
        brand: {
          domain: "https://devopsjsconf.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376976/wqgt95tr1tys6lspnv0q.png",
          name: "DevOps.js",
        },
        endDate: "2022-03-25T20:00:00.000Z",
        id: 22,
        name: "DevOps.js Conf 2022",
        slug: "devops-conf-2022",
        startDate: "2022-03-24T15:00:00.000Z",
      },
      featured: true,
      id: 653,
      image: null,
      slug: "levelling-up-monorepos-with-npm-workspaces",
      tags: [
        {
          label: "monorepos",
        },
        {
          label: "devops",
        },
        {
          label: "npm",
        },
      ],
      title: "Levelling up Monorepos with npm Workspaces",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1643188085/dtgad8uvnymourl8jiyc.jpg",
          company: "GitHub",
          id: 7877,
          name: "Ruy Adorno",
          nickname: "ruy_adorno",
        },
      ],
    },
  ],
  [],
  [],
  [
    {
      access: 1,
      category: 0,
      duration: 21,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 943,
      image: null,
      slug: "astro-and-fresh-understanding-the-islands-architecture",
      tags: [
        {
          label: "architecture",
        },
      ],
      title: "Astro & Fresh - Understanding the Islands Architecture",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1663084629/dev/Arpit_Bharti_yfuemd.jpg",
          company: "Rage Trade",
          id: 13271,
          name: "Arpit Bharti",
          nickname: "arpit_bharti",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 22,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 920,
      image: null,
      slug: "building-age-of-empires-2-in-react",
      tags: [
        {
          label: "react",
        },
      ],
      title: "Building Age of Empires 2 in React",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1662121206/dev/Joe_Hart_jdn2k4.jpg",
          company: "Developer Advocate",
          id: 13116,
          name: "Joe Hart",
          nickname: "joe_hart",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 9,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 935,
      image: null,
      slug: "building-a-lightning-fast-site-with-nextjs-graphql-and-tailwind",
      tags: [
        {
          label: "next.js",
        },
        {
          label: "graphql",
        },
      ],
      title:
        "Building a Lightning-Fast Site with Next.js, GraphQL and Tailwind ⚡️",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1663313027/dev/Ankita_Kulkarni_frvxts.jpg",
          company: "Senior Engineering Manager",
          id: 13330,
          name: "Ankita Kulkarni",
          nickname: "ankita_kulkarni",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 16,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 925,
      image: null,
      slug: "ladle-the-story-about-modules-and-performance",
      tags: [
        {
          label: "performance",
        },
        {
          label: "modules",
        },
      ],
      title: "Ladle: The Story About Modules and Performance",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623943752/lnswiy2vt7drbxy6xztw.jpg",
          company: "Uber",
          id: 2316,
          name: "Vojtech Miksu",
          nickname: "vojtech_miksu",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 8,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 933,
      image: null,
      slug: "headless-the-future-of-cms-is-here",
      tags: [
        {
          label: "headless cms",
        },
      ],
      title: "Headless - The Future of CMS Is Here",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1620828975/xbozxzt1zajiiam4zcs6.jpg",
          company: "Storyblok",
          id: 2019,
          name: "Samuel Snopko",
          nickname: "Samuel_Snopko",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 7,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 936,
      image: null,
      slug: "separating-separation-of-concerns",
      tags: [
        {
          label: "react",
        },
      ],
      title: "Separating Separation of Concerns",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1664466102/dev/Jacob_Whitford-Bender_sgklt9.jpg",
          company: "xMentium",
          id: 13329,
          name: "Jacob Whitford-Bender",
          nickname: "jacob_whitfordbender",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 19,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 926,
      image: null,
      slug: "understand-your-codebase-to-innovate-faster",
      tags: [
        {
          label: "react",
        },
      ],
      title: "Understand Your Codebase to Innovate Faster",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1663067345/dev/Simon_Waterer_m7uyuq.jpg",
          company: "Sourcegraph",
          id: 13265,
          name: "Simon Waterer",
          nickname: "simon_waterer",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 17,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 939,
      image: null,
      slug: "zero-bundle-size-server-components",
      tags: [
        {
          label: "server components",
        },
      ],
      title: "Zero Bundle Size Server Components",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653493128/orrgtgoncmg5yurykajk.jpg",
          company: "Freelance Consultant",
          id: 9883,
          name: "Aashima Ahuja",
          nickname: "aashima_ahuja",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 21,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 923,
      image: null,
      slug: "treat-your-users-right-with-segmented-rendering",
      tags: [
        {
          label: "react",
        },
      ],
      title: "Treat your users right with Segmented Rendering",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1661785359/dev/tg_image_2709780553_ny2c9l.jpg",
          company: "LBKE",
          id: 13004,
          name: "Eric Burel",
          nickname: "eric_burel",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 22,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 922,
      image: null,
      slug: "developing-and-driving-adoption-of-component-libraries",
      tags: [
        {
          label: "component library",
        },
      ],
      title: "Developing and Driving Adoption of Component Libraries",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1662117807/dev/Logan_Ralston_nhumzr.jpg",
          company: "TikTok",
          id: 13111,
          name: "Logan Ralston",
          nickname: "logan_ralston",
        },
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1662119795/dev/Lachlan_Bradford_kvoofa.jpg",
          company: "Tiktok",
          id: 13114,
          name: "Lachlan Bradford",
          nickname: "lachlan_bradford",
        },
      ],
    },
  ],
  [
    {
      access: 1,
      category: 0,
      duration: 28,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 800,
      image: null,
      slug: "future-features-of-js",
      tags: [
        {
          label: "javascript",
        },
        {
          label: "tc39",
        },
      ],
      title: "Future Features of JS?!",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623141443/wmcyeps33cdgwblu52z6.png",
          company: "PayPal",
          id: 2093,
          name: "Hemanth HM",
          nickname: "hemanth_hm",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 132,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2021-10-25T21:59:00.000Z",
        id: 16,
        name: "React Advanced Conference 2021",
        slug: "react-advanced-conference-2021",
        startDate: "2021-10-22T08:00:00.000Z",
      },
      featured: true,
      id: 508,
      image: null,
      slug: "concurrent-rendering-adventures-in-react-18",
      tags: [
        {
          label: "react 18",
        },
        {
          label: "react",
        },
        {
          label: "concurrent rendering",
        },
      ],
      title: "Concurrent Rendering Adventures in React 18",
      users: [
        {
          avatar: "https://avatars.githubusercontent.com/u/3197730?v=4",
          company: "Independent Software Consultant and Trainer",
          id: 2139,
          name: "Maurice de Beijer",
          nickname: "Maurice_de_Beijer",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 23,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 733,
      image: null,
      slug: "lets-talk-about-re-renders",
      tags: [
        {
          label: "performance",
        },
        {
          label: "react 18",
        },
        {
          label: "react",
        },
        {
          label: "deep dive",
        },
        {
          label: "concurrent rendering",
        },
      ],
      title: "Let’s Talk about Re-renders",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653415015/id7av4rhl02k3vwfmoy1.jpg",
          company: "Pyn",
          id: 9855,
          name: "Nadia Makarevich",
          nickname: "nadia_makarevich",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 20,
      event: {
        brand: {
          domain: "https://vuejslive.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1621500214/fcizntw4zinyl8pzu058.png",
          name: "Vue.js London",
        },
        endDate: "2021-10-21T19:00:00.000Z",
        id: 26,
        name: "Vue.js London Live 2021",
        slug: "vuejs-london-2021",
        startDate: "2021-10-20T13:00:00.000Z",
      },
      featured: true,
      id: 409,
      image: null,
      slug: "one-year-into-vue-3",
      tags: [
        {
          label: "vue",
        },
        {
          label: "vue 3",
        },
      ],
      title: "One Year Into Vue 3",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623140860/z6dcikzvjsjkeanzoyzn.jpg",
          company: "Vue.js & Vite Creator",
          id: 2085,
          name: "Evan You",
          nickname: "evan_you",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 19,
      event: {
        brand: {
          domain: "https://live.jsnation.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377122/b4rp3rqhjmyufpabbhtf.png",
          name: "JSNation Live",
        },
        endDate: "2021-06-11T18:00:00.000Z",
        id: 18,
        name: "JSNation Live 2021",
        slug: "jsnation-live-2021",
        startDate: "2021-06-09T10:00:00.000Z",
      },
      featured: false,
      id: 88,
      image: null,
      slug: "multithreaded-logging-with-pino",
      tags: [
        {
          label: "node.js",
        },
        {
          label: "observability",
        },
      ],
      title: "Multithreaded Logging with Pino",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623141948/wjlvon5lgf0i7skvw7yg.jpg",
          company: "NearForm",
          id: 2095,
          name: "Matteo Collina",
          nickname: "Matteo_Collina",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 19,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2021-10-25T21:59:00.000Z",
        id: 16,
        name: "React Advanced Conference 2021",
        slug: "react-advanced-conference-2021",
        startDate: "2021-10-22T08:00:00.000Z",
      },
      featured: false,
      id: 475,
      image: null,
      slug: "react-query-and-auth-who-is-responsible-for-what",
      tags: [
        {
          label: "react query",
        },
        {
          label: "react",
        },
      ],
      title: "React Query and Auth: Who is Responsible for What?",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623768399/kzc1tie95ycrd82aywcw.jpg",
          company: "Teacher, Coder & Testing Enthusiast",
          id: 2285,
          name: "Bonnie Schulkin",
          nickname: "Bonnie_Schulkin",
        },
      ],
    },
    {
      access: 2,
      category: 2,
      duration: 177,
      event: {
        brand: {
          domain: "https://remote.reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376965/gu6c5rsayr3qtz6zvshf.jpg",
          name: "React Summit Remote Edition",
        },
        endDate: "2021-04-15T22:00:00.000Z",
        id: 3,
        name: "React Summit Remote Edition 2021",
        slug: "react-summit-remote-edition-2021",
        startDate: "2021-04-11T22:00:00.000Z",
      },
      featured: true,
      id: 100,
      image: null,
      slug: "react-hooks-tips-only-the-pros-know",
      tags: [
        {
          label: "react hooks",
        },
        {
          label: "react",
        },
        {
          label: "best practices",
        },
        {
          label: "deep dive",
        },
      ],
      title: "React Hooks Tips Only the Pros Know",
      users: [
        {
          avatar: "https://avatars.githubusercontent.com/u/3197730?v=4",
          company: "Independent Software Consultant and Trainer",
          id: 2139,
          name: "Maurice de Beijer",
          nickname: "Maurice_de_Beijer",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 6,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2021-10-25T21:59:00.000Z",
        id: 16,
        name: "React Advanced Conference 2021",
        slug: "react-advanced-conference-2021",
        startDate: "2021-10-22T08:00:00.000Z",
      },
      featured: false,
      id: 453,
      image: null,
      slug: "full-stack-and-typesafe-react-native-apps-with-trpcio",
      tags: [
        {
          label: "backend",
        },
        {
          label: "developer experience",
        },
        {
          label: "patterns ",
        },
        {
          label: "react",
        },
        {
          label: "typescript",
        },
      ],
      title: "Full-stack & typesafe React (+Native) apps with tRPC.io",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1634916976/rbr55dcrox0slee0ar8o.jpg",
          company: "Tola",
          id: 6125,
          name: "Alexander Johansson",
          nickname: "alexander_johansson",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 33,
      event: {
        brand: {
          domain: "https://jsgamedev.com/",
          icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1647879927/cvshszqwtjjosdjrnj06.jpg",
          name: "JS GameDev Summit",
        },
        endDate: "2022-04-08T20:00:00.000Z",
        id: 36,
        name: "JS GameDev Summit 2022",
        slug: "webgamedev-summit-2022",
        startDate: "2022-04-07T14:00:00.000Z",
      },
      featured: false,
      id: 684,
      image: null,
      slug: "unreal-engine-in-webassemblywebgpu",
      tags: [
        {
          label: "webgpu",
        },
        {
          label: "game engine",
        },
        {
          label: "webgl",
        },
        {
          label: "webassembly",
        },
        {
          label: "game development",
        },
      ],
      title: "Unreal Engine in WebAssembly/WebGPU",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1645792748/o9cpdnnlkfxpwgx9lsar.jpg",
          company: "Wonder Interactive",
          id: 8517,
          name: "Alex St. Louis",
          nickname: "alex_st_louis",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 33,
      event: {
        brand: {
          domain: "https://remote.reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376965/gu6c5rsayr3qtz6zvshf.jpg",
          name: "React Summit Remote Edition",
        },
        endDate: "2021-04-15T22:00:00.000Z",
        id: 3,
        name: "React Summit Remote Edition 2021",
        slug: "react-summit-remote-edition-2021",
        startDate: "2021-04-11T22:00:00.000Z",
      },
      featured: true,
      id: 55,
      image: null,
      slug: "building-better-websites-with-remix",
      tags: [
        {
          label: "remix",
        },
        {
          label: "frameworks",
        },
        {
          label: "react",
        },
      ],
      title: "Building Better Websites with Remix",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1620829733/r5lf9cjehtzzdcotamqc.jpg",
          company: "React Training",
          id: 2025,
          name: "Michael Jackson",
          nickname: "Michael_Jackson",
        },
      ],
    },
  ],
  [
    {
      access: 1,
      category: 0,
      duration: 8,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: false,
      id: 624,
      image: null,
      slug: "understanding-javascript-compilation",
      tags: [
        {
          label: "javascript",
        },
        {
          label: "node.js",
        },
      ],
      title: "Understanding JavaScript Compilation",
      users: [
        {
          avatar: "https://avatars.githubusercontent.com/u/14977595?v=4",
          company: "NearForm",
          id: 7968,
          name: "Michele Riva",
          nickname: "michele_riva",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 26,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 801,
      image: null,
      slug: "quantum-computing-in-javascript-with-qjs",
      tags: [
        {
          label: "innovation",
        },
        {
          label: "javascript",
        },
      ],
      title: "Quantum Computing in JavaScript with Q.js",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1652866626/yechjuleav6eggawguuf.jpg",
          company: "Unity Technologies",
          id: 9800,
          name: "Stewart Smith",
          nickname: "stewart_smith",
        },
      ],
    },
    {
      access: 0,
      category: 0,
      duration: 26,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: true,
      id: 780,
      image: null,
      slug: "webpack-in-5-years",
      tags: [
        {
          label: "builders and founders",
        },
        {
          label: "webpack",
        },
        {
          label: "javascript",
        },
      ],
      title: "Webpack in 5 Years?",
      users: [
        {
          avatar: "https://avatars.githubusercontent.com/u/1365881?v=4",
          company: "Webpack",
          id: 2339,
          name: "Tobias Koppers",
          nickname: "Tobias_Koppers",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 34,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: true,
      id: 594,
      image: null,
      slug: "towards-a-standard-library-for-javascript-runtimes",
      tags: [
        {
          label: "javascript",
        },
        {
          label: "node.js",
        },
        {
          label: "component library",
        },
      ],
      title: "Towards a Standard Library for JavaScript Runtimes",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1642597552/wn60pkxorhehuwhgqdst.jpg",
          company: "Cloudflare",
          id: 7844,
          name: "James Snell",
          nickname: "james_snell",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 99,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 849,
      image: null,
      slug: "finding-hacking-and-fixing-your-nodejs-vulnerabilities-with-snyk-849",
      tags: [
        {
          label: "security",
        },
        {
          label: "npm",
        },
        {
          label: "javascript",
        },
        {
          label: "case study",
        },
        {
          label: "node.js",
        },
      ],
      title:
        "Finding, Hacking and fixing your NodeJS Vulnerabilities with Snyk",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656944169/pwj36aklfmmxvxkz4iv5.jpg",
          company: "Snyk",
          id: 12000,
          name: "Matthew Salmon",
          nickname: "matthew_salmon",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 26,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: false,
      id: 614,
      image: null,
      slug: "the-future-of-javascript-runtimes",
      tags: [
        {
          label: "deno",
        },
        {
          label: "javascript",
        },
        {
          label: "node.js",
        },
        {
          label: "cloudflare",
        },
      ],
      title: "The Future of JavaScript Runtimes",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1642597697/cx3svun14dukocagofh7.jpg",
          company: "Deno",
          id: 7845,
          name: "Aaron O'Mullan",
          nickname: "aaron_o_mullan",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 29,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 794,
      image: null,
      slug: "yarn-4-modern-package-management",
      tags: [
        {
          label: "packaging",
        },
        {
          label: "javascript",
        },
      ],
      title: "Yarn 4 - Modern Package Management",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623141043/iyfeeegwhirdgow0lcug.jpg",
          company: "Datadog",
          id: 2087,
          name: "Maël Nison",
          nickname: "mael_nison",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 26,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 781,
      image: null,
      slug: "how-js-modules-work-a-browser-perspective",
      tags: [
        {
          label: "javascript",
        },
        {
          label: "modules",
        },
      ],
      title: "How JS Modules work: a Browser Perspective",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653491944/tpnvgetcmxyj1mte7iyu.jpg",
          company: "Mozilla",
          id: 9875,
          name: "Yulia Startsev",
          nickname: "yulia_startsev",
        },
      ],
    },
    {
      access: 2,
      category: 2,
      duration: 192,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2020-10-15T22:00:00.000Z",
        id: 8,
        name: "React Summit 2020",
        slug: "react-summit-2020",
        startDate: "2020-10-14T22:00:00.000Z",
      },
      featured: false,
      id: 302,
      image: null,
      slug: "build-full-featured-frontend-app-with-svelte",
      tags: [
        {
          label: "svelte",
        },
        {
          label: "javascript",
        },
        {
          label: "react",
        },
      ],
      title: "Build Full Featured Frontend App with Svelte",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1626070095/oxdeigt0yexylzcj8emm.jpg",
          company: "ING",
          id: 2894,
          name: "Mikhail Kuznetcov",
          nickname: "mikhail_kuznetcov",
        },
      ],
    },
    {
      access: 0,
      category: 1,
      duration: 6,
      event: null,
      featured: true,
      id: 397,
      image: null,
      slug: "charlie-gerards-career-advice-be-intentional-about-how-you-spend-your-time-and-effort",
      tags: [
        {
          label: "tensorflow",
        },
        {
          label: "javascript",
        },
        {
          label: "machine learning",
        },
        {
          label: "career",
        },
      ],
      title:
        "Charlie Gerard's Career Advice: Be intentional about how you spend your time and effort",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623140952/igv1brtbexgj1nzrytgb.jpg",
          company: "Netlify",
          id: 2086,
          name: "Charlie Gerard",
          nickname: "Charlie_Gerard",
        },
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1627991147/b4ug9zfmr2vhfczlzyjo.jpg",
          company: "prg.ai",
          id: 3038,
          name: "Jan Tomes",
          nickname: "jan_tomes",
        },
      ],
    },
  ],
  [
    {
      access: 1,
      category: 0,
      duration: 22,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 752,
      image: null,
      slug: "a-frontend-developers-guide-to-web3",
      tags: [
        {
          label: "web3",
        },
        {
          label: "react",
        },
        {
          label: "fullstack",
        },
        {
          label: "frontend",
        },
      ],
      title: "A Frontend Developer’s Guide to Web3",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653412987/pjop1lqspxnfjuhosoqn.jpg",
          company: "Polygon",
          id: 9849,
          name: "Rahat Chowdhury",
          nickname: "rahat_chowdhury",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 92,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 838,
      image: null,
      slug: "bringing-your-react-web-app-to-native-with-capacitor",
      tags: [
        {
          label: "mobile apps",
        },
        {
          label: "capacitor",
        },
        {
          label: "react",
        },
        {
          label: "cross-platform",
        },
      ],
      title: "Bringing your React Web App to native with Capacitor",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1636020368/f34r5bwks6txg3gx4sqz.png",
          company: "Ionic",
          id: 3035,
          name: "Mike Hartington",
          nickname: "mike_hartington",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 75,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 837,
      image: null,
      slug: "how-to-design-a-sustainable-freelancecontracting-career-speedcoding-challenge",
      tags: [
        {
          label: "react",
        },
        {
          label: "career",
        },
      ],
      title:
        "How To Design A Sustainable Freelance/Contracting Career + Speedcoding Challenge",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1635341059/igtvacrndbndaeamngvv.jpg",
          company: "Toptal",
          id: 6437,
          name: "Shane Ketterman",
          nickname: "shane_ketterman",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 10,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 765,
      image: null,
      slug: "the-subtle-art-of-subtle-loading",
      tags: [
        {
          label: "react 18",
        },
        {
          label: "react",
        },
        {
          label: "user experience ",
        },
      ],
      title: 'The Subtle Art of "Subtle Loading"!',
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1620986423/aw3qjnlyiraegaxg1tgu.jpg",
          company: "Postman",
          id: 2050,
          name: "Nikhil Sharma",
          nickname: "nikhil_sharma",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 23,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 930,
      image: null,
      slug: "staying-safe-in-a-concurrent-world",
      tags: [
        {
          label: "react",
        },
      ],
      title: "Staying Safe in a Concurrent World",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1634912163/suupzoyg1jgy8r4mah8k.jpg",
          company: "Esveo",
          id: 2359,
          name: "Andreas Roth",
          nickname: "andreas_roth",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 20,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 940,
      image: null,
      slug: "lessons-learnt-while-creating-a-new-framework-on-top-of-react",
      tags: [
        {
          label: "developer experience",
        },
        {
          label: "react",
        },
      ],
      title: "Lessons Learnt While Creating a New Framework on Top of React",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1662619855/dev/Shyam_Swaroop_pqx7to.jpg",
          company: "Atri Labs",
          id: 13200,
          name: "Shyam Swaroop",
          nickname: "shyam_swaroop",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 8,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 932,
      image: null,
      slug: "react-remixed",
      tags: [
        {
          label: "remix",
        },
        {
          label: "react",
        },
      ],
      title: "React Remixed",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1663241617/dev/Daniel_Afonso_wk2dip.png",
          company: "OLX Group",
          id: 13315,
          name: "Daniel Afonso",
          nickname: "daniel_afonso",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 24,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 916,
      image: null,
      slug: "arrows-at-length",
      tags: [
        {
          label: "react",
        },
      ],
      title: "Arrows (At Length)",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1661784558/dev/Steve_Ruiz_jqm1cj.jpg",
          company: "tldraw",
          id: 12996,
          name: "Steve Ruiz",
          nickname: "steve_ruiz",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 19,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 946,
      image: null,
      slug: "building-figmas-widget-code-generator",
      tags: [
        {
          label: "react",
        },
      ],
      title: "Building Figma’s Widget Code Generator",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1661784195/dev/Jenny_Lea_yvnnj4.jpg",
          company: "Figma",
          id: 12994,
          name: "Jenny Lea",
          nickname: "jenny_lea",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 20,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 917,
      image: null,
      slug: "what-happens-when-you-build-your-app",
      tags: [
        {
          label: "react",
        },
      ],
      title: "What Happens When You Build Your App",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1664463497/dev/Charlotte_Isambert_fwodim.jpg",
          company: "Bam.tech",
          id: 13273,
          name: "Charlotte Isambert",
          nickname: "charlotte_isambert",
        },
      ],
    },
  ],
  [
    {
      access: 1,
      category: 0,
      duration: 26,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 817,
      image: null,
      slug: "gpu-accelerating-nodejs-web-services-and-visualization-with-rapids",
      tags: [
        {
          label: "node.js",
        },
        {
          label: "machine learning",
        },
        {
          label: "data",
        },
      ],
      title:
        "GPU Accelerating Node.js Web Services and Visualization with RAPIDS",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1652869682/yozywgz2pafw22ejednj.jpg",
          company: "NVIDIA | Data Visualization",
          id: 9810,
          name: "Allan Enemark",
          nickname: "allan_enemark",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 21,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 820,
      image: null,
      slug: "supercharge-your-nodejs-with-rust",
      tags: [
        {
          label: "javascript",
        },
        {
          label: "node.js",
        },
        {
          label: "rust",
        },
      ],
      title: "🚀 Supercharge your NodeJS with Rust",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1652870078/hazg7htf8ckjhtekcuts.jpg",
          company: "Senior Software Engineer",
          id: 9812,
          name: "Dmitry Kudryavtsev",
          nickname: "dmitry_kudryavtsev",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 9,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: false,
      id: 620,
      image: null,
      slug: "the-secret-life-of-package-managers",
      tags: [
        {
          label: "yarn",
        },
        {
          label: "npm",
        },
        {
          label: "packaging",
        },
        {
          label: "node.js",
        },
      ],
      title: "The Secret Life of Package Managers",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1643970577/obgo9ju1zonmamqdbtbn.jpg",
          company: "Yoobic",
          id: 7914,
          name: "Tally Barak",
          nickname: "tally_barak",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 35,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: false,
      id: 628,
      image: null,
      slug: "evolving-the-node-http-client-with-undici",
      tags: [
        {
          label: "node.js",
        },
      ],
      title: "Evolving the Node HTTP Client with undici",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1642598312/dslsnpjwg4nqovx9umqx.jpg",
          company: "nxtedition",
          id: 7848,
          name: "Robert Nagy",
          nickname: "robert_nagy",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 32,
      event: {
        brand: {
          domain: "https://devopsjsconf.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376976/wqgt95tr1tys6lspnv0q.png",
          name: "DevOps.js",
        },
        endDate: "2022-03-25T20:00:00.000Z",
        id: 22,
        name: "DevOps.js Conf 2022",
        slug: "devops-conf-2022",
        startDate: "2022-03-24T15:00:00.000Z",
      },
      featured: false,
      id: 651,
      image: null,
      slug: "its-a-jungle-out-there-whats-really-going-on-inside-your-nodemodules-folder-651",
      tags: [
        {
          label: "devops",
        },
        {
          label: "node.js",
        },
      ],
      title:
        "It's a Jungle Out There: What's Really Going on Inside Your Node_Modules Folder",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1642597814/dpg8vgfmg69wyqpwmfxo.jpg",
          company: "Socket",
          id: 7846,
          name: "Feross Aboukhadijeh",
          nickname: "feross_aboukhadijeh",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 25,
      event: {
        brand: {
          domain: "https://typescriptcongress.com/",
          icon: "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1643199820/usy8dobn3lrbp60y1er6.png",
          name: "TS Congress",
        },
        endDate: "2022-04-29T20:00:00.000Z",
        id: 35,
        name: "TypeScript Congress 2022",
        slug: "typescript-congress-2022",
        startDate: "2022-04-29T12:00:00.000Z",
      },
      featured: false,
      id: 700,
      image: null,
      slug: "writing-universal-modules-for-deno-node-and-the-browser-700",
      tags: [
        {
          label: "deno",
        },
        {
          label: "node.js",
        },
        {
          label: "modules",
        },
      ],
      title: "Writing universal modules for Deno, Node, and the browser",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1643970383/yjosh7o0ga921s518up2.jpg",
          company: "Deno",
          id: 7913,
          name: "Luca Casonato",
          nickname: "luca_casonato",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 8,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: false,
      id: 622,
      image: null,
      slug: "high-performance-nodejs-powered-by-rust-and-webassembly",
      tags: [
        {
          label: "performance",
        },
        {
          label: "node.js",
        },
        {
          label: "webassembly",
        },
        {
          label: "rust",
        },
      ],
      title: "High Performance Node.js Powered by Rust and WebAssembly ",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1663084204/dev/Shivay_Lamba_if1gqh.jpg",
          company: "Meilisearch",
          id: 2523,
          name: "Shivay Lamba",
          nickname: "shivay_lamba",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 25,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 725,
      image: null,
      slug: "full-stack-js-today-fastify-graphql-and-react",
      tags: [
        {
          label: "graphql",
        },
        {
          label: "node.js",
        },
        {
          label: "fastify",
        },
        {
          label: "fullstack",
        },
      ],
      title: "Full-stack JS today: Fastify, GraphQL and React",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653410863/jcajf27pocnlwihnjoev.jpg",
          company: "Nearform",
          id: 9839,
          name: "Cody Zuschlag",
          nickname: "cody_zuschlag",
        },
      ],
    },
    {
      access: 2,
      category: 2,
      duration: 165,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 843,
      image: null,
      slug: "graphql-from-zero-to-hero-in-3-hours",
      tags: [
        {
          label: "beginner friendly",
        },
        {
          label: "graphql",
        },
        {
          label: "node.js",
        },
        {
          label: "web development",
        },
      ],
      title: "GraphQL - From Zero to Hero in 3 hours",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656941899/lf1sxbvhzjjfgeqkyp7p.jpg",
          company: "Workshops.de",
          id: 11996,
          name: "Pawel Sawicki",
          nickname: "pawel_sawicki",
        },
      ],
    },
    {
      access: 2,
      category: 2,
      duration: 71,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 852,
      image: null,
      slug: "the-clinicjs-workshop",
      tags: [
        {
          label: "debug",
        },
        {
          label: "performance",
        },
        {
          label: "node.js",
        },
      ],
      title: "The Clinic.js Workshop",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656945056/fq5gru1ztj64jcvqalxg.jpg",
          company: "NearForm",
          id: 12002,
          name: "Rafael Silva",
          nickname: "rafael_silva",
        },
      ],
    },
  ],
  [
    {
      access: 1,
      category: 0,
      duration: 7,
      event: {
        brand: {
          domain: "https://testjssummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
          name: "TestJS Summit",
        },
        endDate: "2021-11-19T20:30:00.000Z",
        id: 21,
        name: "TestJS Summit 2021",
        slug: "testjs-summit-late-2021",
        startDate: "2021-11-18T15:00:00.000Z",
      },
      featured: false,
      id: 531,
      image: null,
      slug: "how-to-catch-a11y-defects-during-unit-and-e2e-testing",
      tags: [
        {
          label: "e2e testing",
        },
        {
          label: "unit testing",
        },
        {
          label: "accessibility",
        },
        {
          label: "testing",
        },
      ],
      title: "How to Catch a11y Defects During Unit and E2E Testing",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1636465008/qonviqygehi4r6ooif7g.jpg",
          company: "nrwl.io",
          id: 6580,
          name: "Emily Xiong",
          nickname: "emily_xiong",
        },
      ],
    },
    {
      access: 2,
      category: 2,
      duration: 85,
      event: {
        brand: {
          domain: "https://testjssummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
          name: "TestJS Summit",
        },
        endDate: "2021-11-19T20:30:00.000Z",
        id: 21,
        name: "TestJS Summit 2021",
        slug: "testjs-summit-late-2021",
        startDate: "2021-11-18T15:00:00.000Z",
      },
      featured: false,
      id: 570,
      image: null,
      slug: "automated-accessibility-testing-with-jest-axe-and-lighthouse-ci",
      tags: [
        {
          label: "automated security",
        },
        {
          label: "accessibility",
        },
        {
          label: "automation",
        },
        {
          label: "testing",
        },
      ],
      title: "Automated accessibility testing with jest-axe and Lighthouse CI",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623768399/kzc1tie95ycrd82aywcw.jpg",
          company: "Teacher, Coder & Testing Enthusiast",
          id: 2285,
          name: "Bonnie Schulkin",
          nickname: "Bonnie_Schulkin",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 8,
      event: {
        brand: {
          domain: "https://testjssummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
          name: "TestJS Summit",
        },
        endDate: "2021-11-19T20:30:00.000Z",
        id: 21,
        name: "TestJS Summit 2021",
        slug: "testjs-summit-late-2021",
        startDate: "2021-11-18T15:00:00.000Z",
      },
      featured: false,
      id: 530,
      image: null,
      slug: "who-is-testing-the-tests",
      tags: [
        {
          label: "unit testing",
        },
        {
          label: "testing",
        },
      ],
      title: "Who is Testing the Tests?",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1636464923/e7cgpcsbnjpbmcjhd0de.jpg",
          company: "Info Support",
          id: 6579,
          name: "Simon de Lang",
          nickname: "simon_de_lang",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 9,
      event: {
        brand: {
          domain: "https://testjssummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
          name: "TestJS Summit",
        },
        endDate: "2021-11-19T20:30:00.000Z",
        id: 21,
        name: "TestJS Summit 2021",
        slug: "testjs-summit-late-2021",
        startDate: "2021-11-18T15:00:00.000Z",
      },
      featured: false,
      id: 518,
      image: null,
      slug: "automated-application-security-testing-scott-gerlach",
      tags: [
        {
          label: "api security",
        },
        {
          label: "security testing",
        },
        {
          label: "testing",
        },
        {
          label: "api",
        },
      ],
      title: "Automated Application Security Testing",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623149015/ccl2riraotvohyatd8m5.jpg",
          company: "StackHawk",
          id: 2119,
          name: "Scott Gerlach",
          nickname: "scott_gerlach",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 16,
      event: {
        brand: {
          domain: "https://reactadvanced.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377077/kcq15paug3hug5n1ued6.jpg",
          name: "React Advanced",
        },
        endDate: "2022-10-24T21:59:00.000Z",
        id: 39,
        name: "React Advanced Conference 2022",
        slug: "react-advanced-conference-2022",
        startDate: "2022-10-21T08:00:00.000Z",
      },
      featured: false,
      id: 921,
      image: null,
      slug: "automated-performance-regression-testing-with-reassure",
      tags: [
        {
          label: "performance",
        },
        {
          label: "testing",
        },
      ],
      title: "Automated Performance Regression Testing with Reassure",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1661784404/dev/Micha%C5%82_Pierzcha%C5%82a_uphsuv.jpg",
          company: "Callstack",
          id: 12995,
          name: "Michał Pierzchała",
          nickname: "michal_pierzchala",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 9,
      event: {
        brand: {
          domain: "https://nodecongress.com/",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376938/eav9rff77rtiyz7qse5v.jpg",
          name: "Node Congress",
        },
        endDate: "2022-02-18T20:00:00.000Z",
        id: 27,
        name: "Node Congress 2022",
        slug: "node-congress-2022",
        startDate: "2022-02-17T08:00:00.000Z",
      },
      featured: false,
      id: 610,
      image: null,
      slug: "automated-application-security-testing-with-stackhawk-610",
      tags: [
        {
          label: "automated security",
        },
        {
          label: "node.js",
        },
        {
          label: "security testing",
        },
        {
          label: "testing",
        },
      ],
      title: "Automated Application Security Testing with StackHawk",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623149015/ccl2riraotvohyatd8m5.jpg",
          company: "StackHawk",
          id: 2119,
          name: "Scott Gerlach",
          nickname: "scott_gerlach",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 8,
      event: {
        brand: {
          domain: "https://testjssummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
          name: "TestJS Summit",
        },
        endDate: "2021-11-19T20:30:00.000Z",
        id: 21,
        name: "TestJS Summit 2021",
        slug: "testjs-summit-late-2021",
        startDate: "2021-11-18T15:00:00.000Z",
      },
      featured: false,
      id: 529,
      image: null,
      slug: "e2e-tests-for-api-saving-nerves-and-hours",
      tags: [
        {
          label: "e2e testing",
        },
        {
          label: "testing",
        },
        {
          label: "api",
        },
        {
          label: "next.js",
        },
      ],
      title: "E2E Tests for API – Saving Nerves and Hours",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1636464778/jl245da3njukpaqsyrsu.jpg",
          company: "Unity",
          id: 6578,
          name: "Valentin Kononov",
          nickname: "valentin_kononov",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 18,
      event: {
        brand: {
          domain: "https://testjssummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
          name: "TestJS Summit",
        },
        endDate: "2021-11-19T20:30:00.000Z",
        id: 21,
        name: "TestJS Summit 2021",
        slug: "testjs-summit-late-2021",
        startDate: "2021-11-18T15:00:00.000Z",
      },
      featured: false,
      id: 525,
      image: null,
      slug: "predictive-testing-in-javascript-with-machine-learning",
      tags: [
        {
          label: "machine learning",
        },
        {
          label: "testing",
        },
      ],
      title: "Predictive Testing in JavaScript with Machine Learning",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1663084204/dev/Shivay_Lamba_if1gqh.jpg",
          company: "Meilisearch",
          id: 2523,
          name: "Shivay Lamba",
          nickname: "shivay_lamba",
        },
      ],
    },
    {
      access: 1,
      category: 0,
      duration: 21,
      event: {
        brand: {
          domain: "https://testjssummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376949/rlwmbgekjgai9xefiety.png",
          name: "TestJS Summit",
        },
        endDate: "2021-11-19T20:30:00.000Z",
        id: 21,
        name: "TestJS Summit 2021",
        slug: "testjs-summit-late-2021",
        startDate: "2021-11-18T15:00:00.000Z",
      },
      featured: false,
      id: 527,
      image: null,
      slug: "tests-that-help-you-find-defects-faster",
      tags: [
        {
          label: "tdd",
        },
        {
          label: "testing",
        },
      ],
      title: "Tests That Help you Find Defects Faster",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1636464668/acsj2jtsqqoyfys2nos5.png",
          company: "auteon",
          id: 6577,
          name: "Philipp Giese",
          nickname: "philipp_giese",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 118,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 831,
      image: null,
      slug: "detox-101-how-to-write-stable-end-to-end-tests-for-your-react-native-application",
      tags: [
        {
          label: "beginner friendly",
        },
        {
          label: "react native",
        },
        {
          label: "e2e testing",
        },
        {
          label: "testing",
        },
      ],
      title:
        "Detox 101: How to write stable end-to-end tests for your React Native application",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656687822/qsa26hmpzcxbt6apf5lb.jpg",
          company: "Wix",
          id: 11936,
          name: "Yevheniia Hlovatska",
          nickname: "yevheniia_hlovatska",
        },
      ],
    },
  ],
  [
    {
      access: 0,
      category: 2,
      duration: 130,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 859,
      image: null,
      slug: "react-at-scale-with-vodafone",
      tags: [
        {
          label: "mobile apps",
        },
        {
          label: "case study",
        },
        {
          label: "react",
        },
        {
          label: "web apps",
        },
      ],
      title: "React at scale with Vodafone",
      users: [],
    },
    {
      access: 0,
      category: 2,
      duration: 108,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 857,
      image: null,
      slug: "serverless-for-react-developers",
      tags: [
        {
          label: "beginner friendly",
        },
        {
          label: "serverless",
        },
        {
          label: "web development",
        },
      ],
      title: "Serverless for React Developers",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656951080/tu6vq3mzoiqo4bxpjte6.jpg",
          company: "Xata",
          id: 12007,
          name: "Tejas Kumar",
          nickname: "tejas_kumar_12007",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 152,
      event: {
        brand: {
          domain: "https://reactsummit.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619376923/fszvxiu9y2alolt9eymk.jpg",
          name: "React Summit",
        },
        endDate: "2022-06-21T22:00:00.000Z",
        id: 28,
        name: "React Summit 2022",
        slug: "react-summit-2022",
        startDate: "2022-06-17T09:00:00.000Z",
      },
      featured: false,
      id: 856,
      image: null,
      slug: "build-a-knowledge-base-with-gatsby-contentful-and-aws",
      tags: [
        {
          label: "aws",
        },
        {
          label: "graphql",
        },
        {
          label: "gatsby",
        },
        {
          label: "case study",
        },
      ],
      title: "Build a knowledge base with Gatsby, Contentful and AWS ",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656949584/lbwdwontycs1czyzeys5.jpg",
          company: "Rangle",
          id: 12004,
          name: "Abdelrhman Adel",
          nickname: "abdelrhman_adel",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 116,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 848,
      image: null,
      slug: "docker-101-intro-to-container",
      tags: [
        {
          label: "beginner friendly",
        },
        {
          label: "web development",
        },
        {
          label: "containers",
        },
      ],
      title: "Docker 101 - Intro to Container",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656943829/fcke0ixz9dz8e686p4q1.jpg",
          company: "Docker",
          id: 11999,
          name: "Shy Ruparel",
          nickname: "shy_ruparel",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 141,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 850,
      image: null,
      slug: "going-on-an-adventure-with-nuxt-3-motion-ui-and-azure",
      tags: [
        {
          label: "vue 3",
        },
        {
          label: "azure",
        },
        {
          label: "nuxt.js",
        },
      ],
      title: "Going on an adventure with Nuxt 3, Motion UI and Azure",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656943815/x0ypdoifub9usy08ozoi.jpg",
          company: "Capgemini",
          id: 12001,
          name: "Melanie de Leeuw",
          nickname: "melanie_de_leeuw",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 191,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 846,
      image: null,
      slug: "is-module-federation-right-for-you",
      tags: [
        {
          label: "micro-frontends",
        },
        {
          label: "modules",
        },
      ],
      title: "Is Module Federation Right for You?",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656943157/vx8ja5qqxjwujjfbxasb.jpg",
          company: "Modus Create",
          id: 11997,
          name: "Grgur Grisogono",
          nickname: "grgur_grisogono",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 41,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 847,
      image: null,
      slug: "build-a-chat-room-with-appwrite-and-react",
      tags: [
        {
          label: "realtime",
        },
        {
          label: "case study",
        },
        {
          label: "web development",
        },
      ],
      title: "Build a chat room with Appwrite and React",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656943389/y6saf0k9sdgzlcbsbnay.jpg",
          company: "Appwrite",
          id: 11998,
          name: "Wess Cope",
          nickname: "wess_cope",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 101,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 845,
      image: null,
      slug: "js-security-testing-in-github-actions-845",
      tags: [
        {
          label: "github actions",
        },
        {
          label: "javascript",
        },
        {
          label: "case study",
        },
        {
          label: "security testing",
        },
      ],
      title: "JS Security Testing in GitHub Actions",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623859884/tydm8gm33h49wcfjeshg.jpg",
          company: "StackHawk",
          id: 2301,
          name: "Zachary Conger",
          nickname: "Zachary_Conger",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 116,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 844,
      image: null,
      slug: "get-started-with-ag-grid-angular-data-grid",
      tags: [
        {
          label: "data",
        },
        {
          label: "angular",
        },
      ],
      title: "Get started with AG Grid Angular Data Grid",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1653494449/eb7tkglkrexwigy7id6d.jpg",
          company: "AG Grid",
          id: 9888,
          name: "Stephen Cooper",
          nickname: "stephen_cooper",
        },
      ],
    },
    {
      access: 0,
      category: 2,
      duration: 49,
      event: {
        brand: {
          domain: "https://jsnation.com",
          icon: "https://res.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1619377020/npnnjuy6fubvxhbvepgv.png",
          name: "JS Nation",
        },
        endDate: "2022-06-20T22:00:00.000Z",
        id: 31,
        name: "JSNation 2022",
        slug: "jsnation-2022",
        startDate: "2022-06-16T09:00:00.000Z",
      },
      featured: false,
      id: 842,
      image: null,
      slug: "build-web3-apps-with-javascript",
      tags: [
        {
          label: "web3",
        },
        {
          label: "blockchain",
        },
        {
          label: "javascript",
        },
      ],
      title: "Build Web3 apps with Javascript",
      users: [
        {
          avatar:
            "https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1656687362/wwdy4iaip52spxlu12tp.jpg",
          company: "Decentology",
          id: 11935,
          name: "Shain Dholakiya",
          nickname: "shain_dholakiya",
        },
      ],
    },
  ],
];

export default function handler(req, res) {
  res.status(200).json({ events, contents });
}
