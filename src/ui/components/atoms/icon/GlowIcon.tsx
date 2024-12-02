import React from "react";

// Dynamic import based on the icon name
const importSvg = (name: string): React.FC<React.SVGProps<SVGSVGElement>> => {
  try {
    // Dynamically import the SVG based on the name
    return require(`../icon/icons/icons/${name}.svg`).default;
  } catch (error) {
    console.error(`Icon "${name}" not found.`);
    return () => <span style={{ color: "red" }}>Missing Icon</span>;
  }
};

type GlowIconProps = {
  name: string; // Name of the SVG file (without extension)
  className?: string; // Optional class names for styling
  width?: number | string; // Optional width
  height?: number | string; // Optional height
};

export const GlowIcon: React.FC<GlowIconProps> = ({
  name,
  className,
  width,
  height,
}) => {
  const IconComponent = importSvg(name);

  return (
    <IconComponent
      className={className}
      width={width || "24px"}
      height={height || "24px"}
    />
  );
};
