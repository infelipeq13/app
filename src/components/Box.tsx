import clsx from "clsx";
import { ReactNode } from "react";

type Color = "orange" | "white";

type Props = {
  className?: string;
  color?: Color;
  children: ReactNode;
};

const getColors = (color: Color) => {
  switch (color) {
    case "orange":
      return "bg-orange-100 border-orange-300";
    case "white":
      return "bg-white border-gray-300";
  }
};

export const Box = ({ children, className, color = "white" }: Props) => {
  return (
    <div className={clsx("p-4 border", className, getColors(color))}>
      {children}
    </div>
  );
};
