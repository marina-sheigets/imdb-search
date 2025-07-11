import "./Paragraph.css";

type ParagraphProps = {
  text: string;
  size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "tertiary";
};

function Paragraph({ text, size = "medium", color = "primary" }: Readonly<ParagraphProps>) {
  return (
    <p className={`paragraph ${size} ${color}`}>
      {text}
    </p>
  );
}

export default Paragraph;