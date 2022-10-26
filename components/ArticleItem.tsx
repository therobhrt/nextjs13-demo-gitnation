import TagComponent from "../components/TagComponent";
import AccessLink from "../components/AccessLink";
import React from "react";
import { getResizedCloudinaryImage } from "./Events";
import Link from "next/link";
import { ContentCategory } from "../app/page";

export function getAvatar(user, width?: number): string {
  return (
    getResizedCloudinaryImage(user.avatar || undefined, width) ||
    "/default-avatar.jpeg"
  );
}

export function getProfileUrl(user): string {
  const name = user.nickname && encodeURI(user.nickname);
  return `/person/${name || user.id}`;
}

export function getName(user): string | null {
  return user.name;
}

function AuthorsListItem(props: { user: any }) {
  return (
    <div className="article-box__author">
      <Link
        href={getProfileUrl(props.user)}
        prefetch={false}
        className="ab-author"
      >
        <div className="ab-author__img">
          <img
            src={getAvatar(props.user, 60)}
            alt={props.user.name}
            loading="lazy"
          />
          <span className="status"></span>
        </div>
        <div className="ab-author__content">
          <div className="ab-author__name">{getName(props.user)}</div>
        </div>
      </Link>
    </div>
  );
}

function AuthorsShortListItem(props: { user: any }) {
  return (
    <Link
      href={getProfileUrl(props.user)}
      prefetch={false}
      className="ab-author"
    >
      <div className="ab-author__img">
        <img src={getAvatar(props.user)} alt={props.user.name} loading="lazy" />
        <span className="status"></span>
      </div>
    </Link>
  );
}

function AuthorsList({ users }) {
  let content;
  if (users && users.length > 1) {
    content = (
      <>
        {users.map((user, idx) => {
          // @ts-ignore
          return <AuthorsShortListItem key={user.id} user={user} />;
        })}
        <div className="ab-authors-more">{users.length} authors</div>
      </>
    );
  } else {
    content = users && users[0] && <AuthorsListItem user={users[0]} />;
  }
  return <div className="article-box__author">{content}</div>;
}

export function ArticleItem({
  skipWrapper,
  content,
  highlightFeatured,
  wrapperStyles,
}) {
  // @ts-ignore
  const multipleOwners = content.users && content.users.length;
  // IMPORTANT NOTE: if changing markup of this card, check how it renders in og-content-screenshot/[slug].tsx that used to take social share screenshots
  let articleBoxClass = multipleOwners
    ? "article-box  article-box--multiple-owners "
    : "article-box type-article";

  const isFreeWorkshop = true;

  // @ts-ignore
  const elements = (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <article className={articleBoxClass}>
      <AccessLink content={content} />
      <div
        className={`article-box__top${
          !content.event?.brand?.icon ? " article-box__height" : ""
        }`}
      >
        {content.category !== ContentCategory.Article &&
          content.event?.brand?.icon && (
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
        <ArticleDuration content={content} />
      </div>
      <div className="article-box__main">
        <div className="article-box__title">{content.title}</div>
        <div className="type">
          {highlightFeatured && content.featured
            ? `${isFreeWorkshop ? "Free Featured " : "Featured "}${
                ContentCategory[content.category]
              }`
            : `${isFreeWorkshop ? "Free " : ""}${
                ContentCategory[content.category]
              }`}
        </div>
        {/*@ts-ignore*/}
        <AuthorsList users={content.users} />
      </div>
      <div className="article-box__bottom">
        {/* <div className="date">{formatDate(content)}</div> */}
        <div className="tags-list">
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
      <div className="order-1 col-xxl-4 col-md-6" style={wrapperStyles}>
        {elements}
      </div>
    );
  }

  return elements;
}

function ArticleDuration({ content }) {
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
