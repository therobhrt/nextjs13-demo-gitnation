"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import { ContentListItem } from "../components/ContentList";

function ContentSliderItem({ content }) {
  return (
    <SwiperSlide
      className="swiper-slide"
      style={{
        width: "auto!important",
        maxWidth: "90%",
      }}
    >
      {/* @ts-ignore*/}
      <ContentListItem skipWrapper={true} content={content} />
    </SwiperSlide>
  );
}

export function ContentSlider({
  contents = [],
  title,
}: {
  contents: any[];
  title: string;
  messageWhenEmpty?: string | Element;
}) {
  const titleSlug = title.replace(/\W/g, "");
  SwiperCore.use([Navigation, Mousewheel]);

  // if empty contents and no fallback message
  if (!contents || !contents.length) {
    return null;
  }

  return (
    <section className="w-section">
      <div className="aside-title color">{title}</div>
      <div className={`${titleSlug}-today-swiper content-swiper`}>
        {!contents || !contents.length ? (
          <div>No data here</div>
        ) : (
          <Swiper
            threshold={3}
            loop={false}
            slidesPerView="auto"
            spaceBetween={0}
            direction="horizontal"
            mousewheel={{
              forceToAxis: true,
              thresholdDelta: 3,
            }}
            watchOverflow={true}
            className="swiper-container"
            navigation={{
              nextEl: `.${titleSlug}-swiper__next`,
              prevEl: `.${titleSlug}-swiper__prev`,
            }}
          >
            <div className="swiper-wrapper">
              {contents.map(
                (content) =>
                  content && (
                    // @ts-ignore
                    <ContentSliderItem key={content.id} content={content} />
                  )
              )}
            </div>
            <div
              className={`swiper-button-prev ${titleSlug}-swiper__prev swiper-button-disabled`}
            >
              <svg className="icon icon-arrow-left">
                <use xlinkHref="/img/sprite.svg?v2#arrow-left"></use>
              </svg>
            </div>
            <div className={`swiper-button-next ${titleSlug}-swiper__next`}>
              <svg className="icon icon-arrow-right">
                <use xlinkHref="/img/sprite.svg?v2#arrow-right"></use>
              </svg>
            </div>
          </Swiper>
        )}
      </div>
    </section>
  );
}
