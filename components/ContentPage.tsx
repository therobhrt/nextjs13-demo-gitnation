import { ContentCategory } from "../app/page";
import { getResizedCloudinaryImage } from "./Events";
import TagComponent from "./TagComponent";
import Link from "next/link";
import { getName, getProfileUrl } from "./VideoItem";
import { getAvatar } from "./ArticleItem";

export function ContentText({ content }) {
  return content.text ? (
    <div
      className="article-content"
      dangerouslySetInnerHTML={{ __html: content.text }}
      itemProp="description"
    />
  ) : null;
}

export function ContentTags({ content }) {
  return content.tags && content.tags.length ? (
    <div className="article-main__tags">
      <div className="tags-list">
        {content.tags.map((tag) => (
          // @ts-ignore
          <TagComponent selectedTag={null} tag={tag} key={tag.label} />
        ))}
      </div>
    </div>
  ) : null;
}

function AuthorListItem({ user, isMetadataOn }) {
  const url = getProfileUrl(user);
  return (
    <Link href={url} className="panel__ab-author ab-author">
      <div className="ab-author__img">
        <img
          src={getAvatar(user)}
          alt={getName(user) || undefined}
          loading="lazy"
        />
        <span className="status"></span>
      </div>

      <div className="ab-author__content">
        <div
          className="ab-author__name"
          {...(isMetadataOn ? { itemProp: "name" } : "")}
        >
          {getName(user)}
        </div>
      </div>
    </Link>
  );
}

export function ContentAuthor({ content, isMetadataOn = false }) {
  return content.users && content.users.length ? (
    <>
      {content.users.map((user) => (
        <AuthorListItem
          user={user}
          key={user.name}
          isMetadataOn={isMetadataOn}
        />
      ))}
    </>
  ) : null;
}

export default function ContentPage({ content }) {
  return (
    <>
      <div className="wrap__content">
        <div className="w-main"></div>
        <div className="page-main">
          <article className="article-main  article-main--full">
            <div className="article-main__wrap">
              <div className="article-main__content">
                <h1 className="article-main__title">{content.title}</h1>
              </div>
              {content.category === ContentCategory.Workshop &&
              content.event?.brand?.icon ? (
                <div className="article-main__side">
                  <div className="wshos">
                    <div
                      className="wshos__title"
                      style={{ marginBottom: "10px" }}
                    >
                      Workshop from:
                    </div>
                    <a
                      className="wshos__wrap"
                      href={`/events/${content.event.slug || content.event.id}`}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div
                        className="wshos__img"
                        style={{
                          display: "inline-block",
                          verticalAlign: "center",
                        }}
                      >
                        <img
                          src={
                            getResizedCloudinaryImage(
                              content.event.brand.icon,
                              180
                            ) || ""
                          }
                          alt={content.event.brand.name}
                        />
                      </div>
                      <div className="wshos__name">{content.event.name}</div>
                    </a>
                  </div>
                </div>
              ) : (
                content.event &&
                content.event?.brand?.icon && (
                  <div className="article-main__side">
                    <div className="wshos">
                      <div
                        className="wshos__title"
                        style={{ marginBottom: "10px" }}
                      >
                        From:
                      </div>
                      <a
                        className="wshos__wrap"
                        href={`/events/${
                          content.event.slug || content.event.id
                        }`}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div
                          className="wshos__img"
                          style={{
                            display: "inline-block",
                            verticalAlign: "center",
                          }}
                        >
                          <img
                            src={
                              getResizedCloudinaryImage(
                                content.event.brand.icon,
                                180
                              ) || ""
                            }
                            alt={content.event.brand.name}
                          />
                        </div>
                        <div className="wshos__name">{content.event.name}</div>
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="article-main__row">
              <div className="article-main__body">
                <ContentText content={content} />
                <ContentTags content={content} />
                <div className="article-main__panel panel">
                  <ContentAuthor content={content} isMetadataOn={true} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
