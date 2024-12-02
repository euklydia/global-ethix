import { Component } from "../../../../common";
import {
  defaultRichTextPatterns,
  renderHighlightTextContent,
  RichTextPattern,
} from "./renderHighlightTextContent";

type GlowHighlightTextProps = {
  text: string;
  patterns?: RichTextPattern[];
};

export const GlowHighlightText: Component<GlowHighlightTextProps> = ({
  text,
}) => {
  return renderHighlightTextContent(text, defaultRichTextPatterns);
};
