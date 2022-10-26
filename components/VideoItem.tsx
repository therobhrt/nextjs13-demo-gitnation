import TagComponent from "../components/TagComponent";
import DefaultAvatar from "../components/DefaultAvatar";
// import { AccessLink } from "./common";
import React from "react";
import { getResizedCloudinaryImage } from "./Events";
import AccessLink from "../components/AccessLink";

export function getProfileUrl(user): string {
  const name = user.nickname && encodeURI(user.nickname);
  return `/person/${name || user.id}`;
}

export function getName(user): string | null {
  return user.name;
}

function VideoDuration({ content }) {
  return content.duration && content.duration > 1 ? (
    <div className="time">
      <svg
        className="icon icon-clock"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="clock"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0zm7-3.7c.6 0 1 .5 1 1v2.3l1.7 1.7a1 1 0 01-1.4 1.4l-2-2a1 1 0 01-.3-.7v-2.7c0-.5.4-1 1-1z"
        ></path>
        <path d="M9 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1h-4a1 1 0 01-1-1z"></path>
      </svg>
      {content.duration} min
    </div>
  ) : null;
}

export function VideoItem({
  skipWrapper,
  content,
  highlightFeatured,
  wrapperStyles,
  horizontalLayout,
}) {
  // @ts-ignore
  const user = content.users[0];
  // IMPORTANT NOTE: if changing markup of this card, check how it renders in og-content-screenshot/[slug].tsx that used to take social share screenshots
  let articleBoxClasses =
    horizontalLayout || (content.featured && highlightFeatured)
      ? "article-box      article-box--author-lg"
      : "article-box  article-box--author   ";
  const wrapperClasses =
    content.featured && highlightFeatured
      ? "order-xxl-1 col-xxl-8 order-0"
      : "order-1 col-xxl-4 col-md-6";

  if (user?.name && countWords(user.name) > 2) {
    articleBoxClasses += " article-box--name-col3  ";
  }

  // Disable prefetch for demo on a single content
  const noPrefetch =
    content.slug === "inside-fiber-the-in-depth-overview-you-wanted-a-tldr-for";

  // Disable data cache for demo on a single content
  const noStore = content.slug === "solidjs-reactivity-unchained";

  // Enable revalidate for demo on a single content
  const revalidate =
    content.slug === "optimizing-html5-games-10-years-of-learnings";

  const elements = (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <article className={articleBoxClasses}>
      <AccessLink content={content} prefetch={!noPrefetch} />
      <div
        className={`article-box__top${
          !content.event?.brand?.icon ? " article-box__height" : ""
        }`}
      >
        {content.event?.brand?.icon && (
          <div className="cat">
            <img
              width={30}
              height={30}
              src={
                getResizedCloudinaryImage(content.event.brand.icon, 180) || ""
              }
              alt={content.event.name}
            />
            <span className="cat__name">{content.event.name}</span>
          </div>
        )}
        {/* {content.featured && highlightFeatured ? (
                    <div className="type">Featured {ContentCategory[content.category]}</div>
                ) : null} */}
        <VideoDuration content={content} />
      </div>
      <div className="article-box__wrap">
        <div className="article-box__main">
          <div className="article-box__title">
            {noPrefetch && "NO PREFETCH "}
            {noStore && "NO STORE "}
            {revalidate && "REVALIDATE 60sec "}
            {content.title}
          </div>
        </div>
        <div className="article-box__head">
          <div className="article-box__head-rel">
            {user && (
              <div className="abh-author">
                {user.avatar ? (
                  <div className="abh-author__img">
                    <picture>
                      <source
                        srcSet={getResizedCloudinaryImage(user.avatar, 600)}
                        media="(min-width: 820px)"
                      />
                      <img
                        src={getResizedCloudinaryImage(user.avatar, 220)}
                        alt={user.name}
                        loading="lazy"
                      />
                    </picture>
                  </div>
                ) : (
                  <DefaultAvatar className="abh-author__img" user={user} />
                )}
                <div className="abh-author__content">
                  <a
                    href={getProfileUrl(user)}
                    className="abh-author__name-wrap"
                  >
                    <div className="abh-author__info">
                      <div
                        className="abh-author__name"
                        style={smallerFontSize(user.name || user.email)}
                      >
                        {getName(user)}
                      </div>
                      {user.company ? (
                        <div className="abh-author__cat">{user.company}</div>
                      ) : null}
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="article-box__bottom">
        <div className="tags-list">
          {/* @ts-ignore */}
          {content.tags?.map((tag) => (
            // @ts-ignore
            <TagComponent selectedTag={null} key={tag.label} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );

  if (!skipWrapper) {
    return (
      <div className={wrapperClasses} style={wrapperStyles}>
        {elements}
      </div>
    );
  }

  return elements;
}

function countWords(str) {
  var matches = str.match(/[\w\d’'-]+/gi);
  return matches ? matches.length : 0;
}

function smallerFontSize(userName: string) {
  const [name, secondName] = userName.split(" ");
  return name.length >= 11 || secondName?.length >= 11
    ? { fontSize: "1.8rem" }
    : {};
}
