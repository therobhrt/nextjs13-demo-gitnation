import Link from "next/link";
import cn from "classnames";
import dayjs from "dayjs";

const DAY = "D";
const MONTH = "MMMM";
const MONTH_SHORT = "MMM";
const YEAR = "YYYY";
const MONTH_YEAR = `${MONTH}, ${YEAR}`;
const MONTH_DAY = `${MONTH} ${DAY}`;
const MONTH_DAY_SHORT = `${MONTH_SHORT} ${DAY}`;
const FULL = `${MONTH_DAY}, ${YEAR}`;
const FULL_SHORT = `${MONTH_DAY_SHORT}, ${YEAR}`;

export function formatEventDate({
  startDate,
  endDate,
  noExactDate,
}: {
  startDate: Date;
  endDate: Date;
  noExactDate: boolean;
}): string {
  const [start, end] = [dayjs(startDate), dayjs(endDate)];

  if (noExactDate) {
    return start.format(MONTH_YEAR);
  }

  switch (true) {
    case !start.isSame(end, "year"):
      // Dec 30, 2022 - Jan 1, 2023
      return `${start.format(FULL_SHORT)} - ${end.format(FULL_SHORT)}`;
    case !start.isSame(end, "month"):
      // Jun 30 - Jul 2, 2022
      return `${start.format(MONTH_DAY_SHORT)} - ${end.format(
        MONTH_DAY_SHORT
      )}, ${start.format(YEAR)}`;
    case !start.isSame(end, "day"):
      // June 4 - 5, 2022
      return `${start.format(MONTH_DAY)} - ${end.format(DAY)}, ${start.format(
        YEAR
      )}`;
    default:
      // June 4, 2022
      return start.format(FULL);
  }
}

export function getEventLink(event): string {
  return `/events/${event.slug || event.id}`;
}

export function getResizedCloudinaryImage(
  url?: string,
  width = 300
): string | undefined {
  if (url && url.indexOf("cloudinary.com") > -1) {
    const [protocol, empty, hostname, cloud, type, action, version, ...path] =
      url.split("/");
    const resizingAddition = `f_auto,c_scale,w_${width}`;

    return [
      protocol,
      empty,
      hostname,
      cloud,
      type,
      action,
      resizingAddition,
      version,
      ...path,
    ]
      .join("/")
      .replace("res.cloudinary", "cdn.cloudinary");
  }
  return url;
}

export const EventsList = ({
  events,
  horizontal,
  smilesBackground,
  pastEvents,
}) => {
  const eventsList = events.map((event) => (
    <EventListItem
      event={event}
      // @ts-ignore
      key={event.id}
      pastEvent={pastEvents}
    />
  ));
  const classes = cn({
    "events-list": true,
    "events-list--horizontal": horizontal,
    "events-list--smiles-bg": smilesBackground,
  });
  return <div className={classes}>{eventsList}</div>;
};

export const EventListItem = ({ event, pastEvent }) => {
  const isFutureEvent =
    typeof pastEvent !== "undefined" ? !pastEvent : event.endDate > new Date();
  // @ts-ignore
  const href = isFutureEvent ? event.brand.domain : getEventLink(event);
  const target = isFutureEvent ? "_blank" : "_self";

  if (!href) {
    return null;
  }

  return (
    <div className="card-event">
      {/*@ts-ignore*/}
      <Link
        href={href}
        prefetch={false}
        target={target}
        className="card-event__link"
      ></Link>

      <div className="card-event__body">
        <div className="card-event__img">
          {/*@ts-ignore*/}
          <img
            src={getResizedCloudinaryImage(event.brand.icon, 180)}
            alt={`${event.name} logo`}
          />
        </div>
        <div className="card-event__title">{event.name}</div>
        <div className="card-event__date">{formatEventDate(event)}</div>
      </div>
    </div>
  );
};

export function UpcomingEvents({ events }) {
  return (
    <div className="wrap__aside wrap__aside--right side-event">
      <div className="aside-title color">Upcoming events</div>
      <div className="card-multipass">
        <div className="card-multipass__head">
          <div className="cm-wrap">
            <div className="cm-wrap__img">
              <img src="/img/logo-dark.svg" alt="" />
            </div>
            <div className="cm-wrap__info">
              <span className="cm-wrap__title">
                Korben <br />
                Dallas
              </span>
              <span className="cm-wrap__text">visa@gitnation.org</span>
            </div>
          </div>
        </div>
        <div className="card-multipass__title">
          Want to have access to all events for 4x less?
        </div>
        <div className="card-multipass__btn">
          <Link href="/multipass" className="btn btn--sm btn--default">
            Learn more
          </Link>
        </div>
      </div>
      {/* @ts-ignore*/}
      <EventsList events={events} />
    </div>
  );
}
