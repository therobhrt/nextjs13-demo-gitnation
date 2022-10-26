import Link from "next/link";

export function getTagLink(tag) {
  return `/tags/${tag.label.toLowerCase()}`;
}

export default function TagComponent({ tag, selectedTag, prefetch }) {
  const url = getTagLink(tag);
  return (
    <Link
      href={url}
      prefetch={
        typeof prefetch === "undefined"
          ? false
          : prefetch === false
          ? false
          : undefined
      }
      className={`tag ${selectedTag === tag.label ? "active" : ""}`}
    >
      {tag.label}
    </Link>
  );
}
