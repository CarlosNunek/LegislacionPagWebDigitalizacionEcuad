import { useEffect, useRef, useState } from "react";

export default function TimelineEmbed() {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(1400);

  useEffect(() => {
    function onMessage(e) {
      if (e.origin !== window.location.origin) return;
      if (e.data?.type === "TIMELINE_HEIGHT" && typeof e.data.height === "number") {
        setHeight(e.data.height);
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="timeline-section" style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <iframe
          ref={iframeRef}
          src="/timeline/timeline.html"
          title="Timeline Digitalización"
          style={{
            width: "100%",
            height: `${height}px`,
            border: 0,
            borderRadius: "16px",
            overflow: "hidden",
            display: "block",
          }}
          scrolling="no"
        />
      </div>
    </section>
  );
}
