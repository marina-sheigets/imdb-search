import React from "react";
import "./Heading.css";

type HeadingProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "secondary" | "tertiary";
  text: string;
  shadow?: boolean;
  align?: "left" | "center" | "right";
};

const Heading: React.FC<HeadingProps> = ({
  variant = "h1",
  color = "primary",
  shadow = false,
  text,
  align = "center",
}) => {
  const HeadingTag = variant;

  return (
    <HeadingTag className={`${color} ${shadow ? "shadow" : ""} ${align}`}>
      {text}
    </HeadingTag>
  );
};

export default Heading;
