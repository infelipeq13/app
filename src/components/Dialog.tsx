import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogLabel,
  AlertDialogOverlay,
} from "@reach/alert-dialog";
import { ReactNode, RefObject } from "react";

type Props = {
  children: ReactNode;
  controls: ReactNode;
  isOpen: boolean;
  leastDestructiveRef: RefObject<HTMLElement>;
  title: ReactNode;
};

export const Dialog = ({
  children,
  controls,
  isOpen,
  leastDestructiveRef,
  title,
}: Props) => {
  return isOpen ? (
    <AlertDialogOverlay leastDestructiveRef={leastDestructiveRef}>
      <AlertDialogContent>
        <AlertDialogLabel>{title}</AlertDialogLabel>
        <AlertDialogDescription>{children}</AlertDialogDescription>
        <div className="mt-4 space-y-4">{controls}</div>
      </AlertDialogContent>
    </AlertDialogOverlay>
  ) : null;
};
