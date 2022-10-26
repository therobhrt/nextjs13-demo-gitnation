import Link from "next/link";

export function getContentUrl(content: { slug: string }): string {
  return `/contents/${content.slug}`;
}

export default function AccessLink({ content }) {
  return (
    <Link
      href={getContentUrl(content)}
      prefetch={false}
      className="article-box__link-cover"
    >
      <span style={{ opacity: 0 }}>{content.title}</span>
    </Link>
  );
}
