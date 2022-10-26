import LeftMenu from "../components/LeftMenu";
import { UpcomingEvents } from "../components/Events";
import { ContentSlider } from "../components/ContentSlider";
// import LastEventsSwiper from "../components/LastEventsSwiper";

export const itemsInRow = 10;
export const basedOnInterestsTitle = "Based on your interests";
export const trendingContentTitle = "Trending today";
export const freeWorkshopsTitle = "Free workshops";

enum TagsIds {
  JavaScript = 51,
  React = 1,
  Node = 61,
  Testing = 10,
  Advanced = 29,
  BuildTools = 52,
}

export enum ContentCategory {
  Talk,
  Article,
  Workshop,
  Video,
}

export const homePageContentConfig = [
  {
    title: "Featured",
    orderBy: [
      {
        publishDate: "desc",
      },
    ],
    where: {
      featured: true,
    },
  },
  {
    title: trendingContentTitle,
    orderBy: [],
    where: {},
    customRequest: true,
  },
  {
    title: "Latest",
    orderBy: [],
    where: {},
  },

  {
    title: "Popular",
    orderBy: [
      {
        views: "desc",
      },
    ],
    where: {},
  },
  {
    title: "JavaScript",
    orderBy: [],
    where: {
      tags: {
        some: {
          id: {
            in: [TagsIds.JavaScript],
          },
        },
      },
    },
  },
  {
    title: "React",
    orderBy: [],
    where: {
      tags: {
        some: {
          id: {
            in: [TagsIds.React],
          },
        },
      },
    },
  },
  {
    title: "Node.js",
    orderBy: [],
    where: {
      tags: {
        some: {
          id: {
            in: [TagsIds.Node],
          },
        },
      },
    },
  },
  {
    title: "Testing",
    orderBy: [],
    where: {
      tags: {
        some: {
          id: {
            in: [TagsIds.Testing],
          },
        },
      },
    },
  },
  {
    title: freeWorkshopsTitle,
    orderBy: [
      {
        publishDate: "desc",
      },
    ],
    where: {
      category: ContentCategory.Workshop,
    },
  },
];

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/getData");

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    return res.json();
  } catch (e) {
    console.log("some error while fetching", e);
    return null;
  }
}

export default async function Page() {
  const { events, contents } = await getData();

  const sliders = [];
  contents.forEach((contentArray, idx) => {
    const currentTitle = homePageContentConfig[idx].title;
    sliders.push(
      // @ts-ignore
      <ContentSlider key={idx} contents={contentArray} title={currentTitle} />
    );
  });

  return (
    <div className="wrap">
      <LeftMenu />
      <div className="wrap__content">
        <div className="w-main" />
        <div className="aside-title color">Talks from our events</div>
        {/*<LastEventsSwiper events={pastEvents} />*/}
        {sliders}
      </div>
      <UpcomingEvents events={events} />
    </div>
  );
}
