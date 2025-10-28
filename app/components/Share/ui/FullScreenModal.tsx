"use client";
import Modal from "./Modal";

export function FullScreenModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      contentClassName="max-w-full max-h-full h-screen m-0 rounded-none"
      backdropClassName="bg-black/80"
    >
      {children}
    </Modal>
  );
}
