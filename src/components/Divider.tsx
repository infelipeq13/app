import clsx from "clsx";

type BorderColor = "orange" | "white";

type Props = {
  borderColor?: BorderColor;
};

const getBorderColor = (borderColor: BorderColor) => {
  switch (borderColor) {
    case "orange":
      return "border-orange-300";
    case "white":
      return "border-gray-300";
  }
};

export const Divider = ({ borderColor = "white" }: Props) => {
  return <div className={clsx("border-t", getBorderColor(borderColor))} />;
};
