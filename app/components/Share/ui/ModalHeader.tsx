interface ModalHeaderProps {
  onClose?: () => void;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  closeButtonClassName?: string;
}

export function ModalHeader({
  onClose,
  children,
  showCloseButton = true,
  closeButtonClassName = "",
}: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex-1">{children}</div>
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className={`rounded-full p-2 bg-white/80 dark:bg-neutral-800 hover:scale-110 transition-transform duration-200 ${closeButtonClassName}`}
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
}