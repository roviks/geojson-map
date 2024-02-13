import type { SVGProps } from "react";

import { cn } from "@/shared/utils";

import { SPRITES_META, type SpritesMap } from "./sprite.gen";

export type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];

type IconSize = "small" | "normal" | "large" | "xlarge" | "full";

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: SpriteKey;
  size?: IconSize;
}

const sizes = {
  small: "h-3 w-3",
  normal: "h-5 w-5",
  large: "h-6 w-6",
  xlarge: "h-10 w-10",
  full: "w-full h-full",
};

export function Icon({
  name,
  className,
  size = "normal",
  ...props
}: IconProps) {
  const [spriteName, iconName] = name.split("/") as [
    keyof SpritesMap,
    SpritesMap[keyof SpritesMap]
  ];

  const { filePath, items } = SPRITES_META[spriteName];
  const { viewBox, width, height } = items[iconName];
  const rect = width === height ? "xy" : width > height ? "x" : "y";

  return (
    <svg
      className={cn(
        "box-content inline-block shrink-0 select-none fill-current text-inherit",
        sizes[size],
        className
      )}
      data-icon-aspect-ratio={rect}
      data-icon-size={size}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use href={`/${filePath}#${iconName}`} />
    </svg>
  );
}
