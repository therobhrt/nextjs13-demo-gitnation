import ContentPage from "../../../components/ContentPage";

// export const runtime = "experimental-edge";

export async function generateStaticParams() {
  const posts = await fetch(
    process.env.NODE_ENV === "production"
      ? "https://nextjs-test-data.vercel.app/api/getData?generateStaticParams"
      : "http://localhost:3000/api/getData?generateStaticParams"
  );

  const { contents } = await posts.json();

  let flatContents = [];

  contents.forEach((contentCollection) =>
    contentCollection.forEach((content) => flatContents.push(content))
  );

  const returnList = flatContents.map((content) => ({
    slug: content.slug,
  }));

  return returnList;
}

async function getData(slug) {
  try {
    // const noStore = slug === "solidjs-reactivity-unchained";
    const revalidate = slug === "optimizing-html5-games-10-years-of-learnings";
    const res = await fetch(
      process.env.NODE_ENV === "production"
        ? `https://nextjs-test-data.vercel.app/api/getData?slug=${slug}`
        : `http://localhost:3000/api/getData?slug=${slug}`,
      {
        // cache: noStore ? "no-store" : undefined,
        next: { revalidate: revalidate ? 60 : undefined },
      }
    );

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const data = await res.json();
    const { contents } = data;

    let flatContents = [];

    contents.forEach((contentCollection) =>
      contentCollection.forEach((content) => flatContents.push(content))
    );

    for (const iterator of flatContents) {
      if (iterator.slug === slug) {
        return iterator;
      }

      continue;
    }

    return null;
  } catch (e) {
    console.log("some error while fetching", e);
    return null;
  }
}

export default async function Contents({ params, searchParams }) {
  const { slug } = params;

  const content = await getData(slug);

  return <ContentPage content={content} />;
}
