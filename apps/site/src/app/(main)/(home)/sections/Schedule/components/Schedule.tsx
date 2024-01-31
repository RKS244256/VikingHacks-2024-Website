import { Fragment } from "react";

interface Event {
  name: string;
  description?: string;
  start: `${number}:${number}`;
  end: `${number}:${number}`;
  tag?: Tag;
}

type Tag = "food" | "workshop" | "event" | "reg";

type EventOrArrayOfEvents = Event | Event[];

const data: EventOrArrayOfEvents[] = [
  [
    {
      name: "✅ Check In",
      start: "9:00",
      end: "9:30",
      tag: "reg",
    },
    {
      name: "👥 Team Formation",
      start: "9:00",
      end: "9:30",
      tag: "reg",
    },
  ],
  {
    name: "👋 Opening Ceremony & Theme Reveal",
    start: "9:30",
    end: "10:00",
    tag: "event",
  },
  {
    name: "🤝 Team Building & Brainstorming",
    start: "10:00",
    end: "10:30",
    tag: "reg",
  },

  {
    name: "💯 Hackathon Success Workshop",
    start: "10:30",
    end: "11:00",
    tag: "workshop",
  },
  {
    name: "🤖 Prototyping With Figma Workshop",
    start: "11:00",
    end: "11:30",
    tag: "workshop",
  },

  {
    name: "🛠️ Brainstorming & Hack Time",
    start: "11:30",
    end: "12:30",
    tag: "reg",
  },
  {
    name: "🍕 Lunch",
    start: "12:30",
    end: "13:00",
    tag: "food",
  },
  {
    name: "🛠️ Hack Time & Mentorship Visits",
    start: "13:00",
    end: "15:00",
    tag: "reg",
  },
  {
    name: "🛠️ Hack/Design Time",
    start: "15:00",
    end: "17:00",
    tag: "reg",
  },
  {
    name: "🌐 API Workshop with Postman",
    start: "15:30",
    end: "16:00",
    tag: "workshop",
  },
  {
    name: "🍪 Snack Break",
    start: "16:30",
    end: "17:00",
    tag: "food",
  },
  [
    {
      name: "💻 Submissions",
      start: "17:00",
      end: "17:30",
      tag: "reg",
    },
    {
      name: "👾 Scavenger Hunt",
      start: "17:30",
      end: "18:00",
      tag: "event",
    },
  ],
  {
    name: "🎤 Presentations",
    start: "18:00",
    end: "20:00",
    tag: "event",
  },
  {
    name: "🏆 Closing Ceremony and Awards",
    start: "20:00",
    end: "20:30",
    tag: "event",
  },
];

const tagColors: { [key in Tag]: string } = {
  food: "bg-blue-700",
  workshop: "bg-yellow-200 text-gray-900",
  event: "bg-green-300 text-gray-900",
  reg: "bg-red-300",
};

const halfHourPx = 50;

const start = 9;
const end = 20.5;

const EventCard = ({ event }: { event: Event | Event[] }) => {
  let startTime, endTime;
  let numEvents = 1;
  if (Array.isArray(event)) {
    startTime = event[0].start;
    endTime = event[event.length - 1].end;
    numEvents = event.length;
  } else {
    startTime = event.start;
    endTime = event.end;
    event = [event];
  }

  const [startHr, startMin] = startTime.split(":").map(Number);
  const [endHr, endMin] = endTime.split(":").map(Number);
  const halvesFromTop = (startHr - start) * 2 + startMin / 30;
  const durationHalves = (endHr - startHr) * 2 + (endMin - startMin) / 30;
  return (
    <div
      className="absolute left-[3rem] right-0 flex sm:left-[4rem]"
      style={{
        top: `${halfHourPx / 2 + (halfHourPx + 1) * halvesFromTop + 1}px`,
        height: `${durationHalves * (halfHourPx + 1) - 1}px`,
      }}
    >
      {event.map((e, i) => (
        <li
          className={`group relative mx-1 my-0.5 rounded-lg ${e.tag ? tagColors[e.tag] : "bg-secondary-500"
            } px-2 py-1`}
          key={i}
          style={{ width: `${100 / numEvents}%` }}
        >
          {e.name}
          {e.description ? (
            <p className="text-sm text-gray-700">{e.description}</p>
          ) : null}
          {e.tag === "workshop" ? (
            <span className="absolute right-2 bottom-2 hidden rounded-full bg-primary-300 px-2 py-0.5 text-sm font-semibold text-primary-700 group-hover:block sm:block">
              Workshop
            </span>
          ) : null}
        </li>
      ))}
    </div>
  );
};

const Schedule = ({ fullScreen = true }: { fullScreen?: boolean }) => {
  return (
    <>
      <h2 className="font-display text-2xl md:text-3xl font:bold"  id="schedule">
        Schedule{" "}
        {!fullScreen ? (
          <a
            className="hover:text-primary-300"
            href="/schedule"
            target="_blank"
            rel="noreferrer"
          >
            &#8599;
          </a>
        ) : null}
      </h2>
      <div
        className={`${!fullScreen ? "h-96 overflow-auto" : ""
          } bg-gray-800 px-2 sm:px-4`}
      >
        <ul className="relative text-base leading-tight sm:text-lg">
          {data.map((event, i) => {
            return <EventCard key={i} event={event} />;
          })}
        </ul>
        <ul className="text-sm sm:text-base">
          {Array.from({ length: end - start + 1 }, (_, i) => {
            const hour24 = start + i;
            const hour12 = hour24 > 12 ? hour24 - 12 : hour24;
            const ampm = hour24 >= 12 ? "pm" : "am";
            return (
              <Fragment key={hour24}>
                <li className="flex items-center gap-3 sm:gap-6">
                  <div className="w-9 flex-shrink-0 sm:w-10">
                    {hour12} {ampm}
                  </div>
                  <div
                    className="w-full border-l border-gray-500"
                    style={{
                      paddingTop: `${halfHourPx / 2}px`,
                      paddingBottom: `${halfHourPx / 2}px`,
                    }}
                  >
                    <hr className="-ml-1 border-gray-500 sm:-ml-2" />
                  </div>
                </li>
                {hour24 !== end ? (
                  <li className="flex items-center gap-3 sm:gap-6">
                    <div className="w-9 flex-shrink-0 sm:w-10"></div>
                    <div
                      className="w-full border-l border-gray-500"
                      style={{
                        paddingTop: `${halfHourPx / 2}px`,
                        paddingBottom: `${halfHourPx / 2}px`,
                      }}
                    >
                      <hr className="-ml-1 border-gray-500 sm:-ml-2" />
                    </div>
                  </li>
                ) : null}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Schedule;