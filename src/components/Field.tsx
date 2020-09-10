import { useId } from "@reach/auto-id";
import clsx from "clsx";
import { forwardRef, ReactNode } from "react";
import type { ComponentPropsWithoutRef } from "react";

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type Ref = HTMLInputElement;

interface Props extends ComponentPropsWithoutRef<"input"> {
  addon?: ReactNode;
  columnSpan?: ColumnSpan;
  hint?: string;
  isNumeric?: boolean;
  label: string;
}

const getColumnSpan = (columnSpan: ColumnSpan) => {
  switch (columnSpan) {
    case 1:
      return "col-span-1";
    case 2:
      return "col-span-2";
    case 3:
      return "col-span-3";
    case 4:
      return "col-span-4";
    case 5:
      return "col-span-5";
    case 6:
      return "col-span-6";
    case 7:
      return "col-span-7";
    case 8:
      return "col-span-8";
  }
};

export const Field = forwardRef<Ref, Props>(
  (
    { addon, className, columnSpan = 8, hint, id, isNumeric, label, ...rest },
    ref
  ) => {
    const inputId = useId(id);

    return (
      <div className="space-y-1">
        <label
          className="text-sm font-medium leading-6 text-gray-900"
          htmlFor={inputId}
        >
          {label}
          <span className="font-normal text-gray-800"> ({hint})</span>
        </label>
        <div className="grid grid-cols-8">
          <input
            id={inputId}
            ref={ref}
            className={clsx(
              "p-4 font-mono text-sm leading-6 text-gray-900 border border-gray-500 | focus:border-orange-500 focus:shadow-outline-orange",
              addon && "border-r-0",
              isNumeric && "mono-font",
              getColumnSpan(columnSpan)
            )}
            {...rest}
          />
          {addon}
        </div>
      </div>
    );
  }
);
