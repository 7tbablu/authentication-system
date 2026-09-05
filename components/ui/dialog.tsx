import { cn } from "@/lib/utils";
import {
  forwardRef,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
} from "react";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Dialog = ({
  isOpen,
  onClose,
  children,
  className,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleCancel = (e: SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    onClose();
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      className={cn(
        "backdrop:bg-slate-950/50 backdrop:backdrop-blur-sm",
        "fixed inset-0 m-auto z-50 max-w-lg w-full rounded-xl border border-slate-200 bg-white p-6 shadow-lg outline-none",
        "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100",
        "open:animate-in open:fade-in-0 open:zoom-in-95",
        className,
      )}
    >
      {children}
    </dialog>
  );
};

export const DialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);

DialogHeader.displayName = "DialogHeader";

export const DialogTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));

DialogTitle.displayName = "DialogTitle";

export const DialogDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400 mt-2", className)}
    {...props}
  />
));

DialogDescription.displayName = "DialogDescription";

export const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6",
      className,
    )}
    {...props}
  />
);

DialogFooter.displayName = "DialogFooter";
