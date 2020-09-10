import clsx from "clsx";
import type { ReactNode } from "react";

import { Box } from "src/components/Box";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ children, className }: Props) => {
  return (
    <Box className={clsx("max-w-xs min-h-screen sm:min-h-full", className)}>
      {children}
    </Box>
  );
};
