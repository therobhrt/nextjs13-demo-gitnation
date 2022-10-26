import Link from "next/link";

export function getContentUrl(content: { slug: string }): string {
  return `/contents/${content.slug}`;
}

export default function AccessLink({
  content,
  prefetch,
}: {
  content: any;
  prefetch?: boolean;
}) {
  return (
    <Link
      href={getContentUrl(content)}
      className="article-box__link-cover"
      prefetch={typeof prefetch === "undefined" ? true : prefetch}
    >
      <span style={{ opacity: 0 }}>{content.title}</span>
    </Link>
  );
}
