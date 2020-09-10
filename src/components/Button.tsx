import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

import { Icon } from "src/components/Icon";
import { LoadingSpinner } from "src/components/LoadingSpinner";
import type { IconName } from "src/components/Icon";

type Ref = HTMLButtonElement;

interface Props extends ComponentPropsWithoutRef<"button"> {
  iconName?: IconName;
  isExpanded?: boolean;
  isLoading?: boolean;
  isSecondary?: boolean;
}

export const Button = forwardRef<Ref, Props>(
  (
    {
      children,
      className,
      iconName,
      isExpanded,
      isLoading,
      isSecondary,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center p-4 space-x-2 text-sm font-medium leading-6 | focus:shadow-outline-orange",
          className,
          isExpanded && "w-full",
          isSecondary
            ? "text-orange-500 bg-transparent | hover:bg-orange-100 | active:bg-orange-200"
            : "text-white bg-orange-500 | hover:bg-orange-400 | active:bg-orange-600"
        )}
        {...rest}
      >
        {children && <span>{children}</span>}
        {isLoading ? (
          <LoadingSpinner className="w-6 h-6" />
        ) : (
          iconName && <Icon className="w-6 h-6" name={iconName} />
        )}
      </button>
    );
  }
);
