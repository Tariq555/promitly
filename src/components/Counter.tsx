"use client";
import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

type NumberProps = { mv: ReturnType<typeof useSpring>; number: number; height: number };

function Num({ mv, number, height }: NumberProps) {
  const y = useTransform(mv, (latest: number) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });
  return (
    <motion.span
      style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", y }}
    >
      {number}
    </motion.span>
  );
}

function Digit({ place, value, height, digitStyle }: { place: number | "."; value: number; height: number; digitStyle?: React.CSSProperties }) {
  const isDecimal = place === ".";
  const rounded   = isDecimal ? 0 : Math.floor(value / (place as number));
  const spring    = useSpring(rounded, { stiffness: 75, damping: 15 });

  useEffect(() => {
    if (!isDecimal) spring.set(rounded);
  }, [spring, rounded, isDecimal]);

  if (isDecimal) {
    return (
      <span style={{ height, display: "inline-flex", alignItems: "center", justifyContent: "center", width: "fit-content", ...digitStyle }}>
        .
      </span>
    );
  }

  return (
    <span
      style={{ position: "relative", display: "inline-flex", overflow: "hidden", height, width: "1ch", fontVariantNumeric: "tabular-nums", ...digitStyle }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Num key={i} mv={spring} number={i} height={height} />
      ))}
    </span>
  );
}

type CounterProps = {
  value: number;
  places?: (number | ".")[];
  fontSize?: number;
  padding?: number;
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: string | number;
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
};

function computePlaces(value: number): (number | ".")[] {
  const chars = [...value.toString()];
  const dotIdx = chars.indexOf(".");
  return chars.map((ch, i) => {
    if (ch === ".") return ".";
    return 10 ** (dotIdx === -1 ? chars.length - i - 1 : i < dotIdx ? dotIdx - i - 1 : -(i - dotIdx));
  }) as (number | ".")[];
}

export default function Counter({
  value,
  places,
  fontSize = 100,
  padding = 0,
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
}: CounterProps) {
  const resolvedPlaces = places ?? computePlaces(value);
  const height = fontSize + padding;

  return (
    <span style={{ position: "relative", display: "inline-block", ...containerStyle }}>
      <span
        style={{
          fontSize,
          display: "flex",
          gap,
          overflow: "hidden",
          borderRadius,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          lineHeight: 1,
          color: textColor,
          fontWeight,
          ...counterStyle,
        }}
      >
        {resolvedPlaces.map((p, i) => (
          <Digit key={i} place={p} value={value} height={height} digitStyle={digitStyle} />
        ))}
      </span>
      <span style={{ pointerEvents: "none", position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <span style={{ height: gradientHeight, background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }} />
        <span style={{ height: gradientHeight, background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})` }} />
      </span>
    </span>
  );
}
