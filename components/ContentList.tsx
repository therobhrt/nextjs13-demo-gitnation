import { ArticleItem } from "../components/ArticleItem";
import { VideoItem } from "../components/VideoItem";
import { ContentCategory } from "../app/page";

export const ContentListItem = ({
  skipWrapper,
  content,
  highlightFeatured,
}) => {
  if (content.category !== ContentCategory.Talk) {
    return (
      // @ts-ignore
      <ArticleItem
        skipWrapper={skipWrapper}
        content={content}
        highlightFeatured={highlightFeatured}
      />
    );
  } else {
    return (
      // @ts-ignore
      <VideoItem
        skipWrapper={skipWrapper}
        content={content}
        highlightFeatured={highlightFeatured}
      />
    );
  }
};
