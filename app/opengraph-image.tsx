import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInterTight() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500"
  ).then((res) => res.text());
  const fontUrl = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!fontUrl) return null;
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const interTightData = await loadInterTight();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#161616",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#8a8a8a",
            marginBottom: 24,
            letterSpacing: "-0.02em",
            fontFamily: interTightData ? "Inter Tight" : undefined,
          }}
        >
          taha.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 500,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            fontFamily: interTightData ? "Inter Tight" : undefined,
          }}
        >
          <span>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 500,
            color: "#e6e6e6",
            marginTop: 28,
            letterSpacing: "-0.02em",
            fontFamily: interTightData ? "Inter Tight" : undefined,
          }}
        >
          {site.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: interTightData
        ? [
            {
              name: "Inter Tight",
              data: interTightData,
              weight: 500,
              style: "normal",
            },
          ]
        : undefined,
    }
  );
}
