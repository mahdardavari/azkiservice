"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  animationDuration?: number;
  className?: string;
  backdropClassName?: string;
  contentClassName?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  animationDuration = 300,
  className = "",
  backdropClassName = "",
  contentClassName = "",
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, animationDuration);
  }, [onClose, animationDuration]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!closeOnEscape || !onClose) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        close();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close, closeOnEscape, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center outline-none ${className}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-${animationDuration} ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${backdropClassName}`}
        onClick={closeOnBackdropClick ? close : undefined}
      />

      {/* Content */}
      <div
        className={`
          relative max-w-3xl w-full mx-4 
          bg-white dark:bg-neutral-900 
          rounded-xl shadow-2xl overflow-hidden
          transform transition-all duration-${animationDuration}
          ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          ${contentClassName}
        `}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
