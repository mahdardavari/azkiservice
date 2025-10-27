"use client";

import { useCallback, useEffect, useState } from "react";
import { Photo } from "@/app/lib/data";

export default function Modal({
  photo,
  onClose,
}: {
  photo: Photo;
  onClose?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Match this with the animation duration
  }, [onClose]);

  useEffect(() => {
    // Trigger enter animation after mount
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <div
      id="hiking-modal"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center outline-none"
    >
      {/* Backdrop with fade animation */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      />

      <div
        className={`
        relative max-w-3xl w-full mx-4 
        bg-white dark:bg-neutral-900 
        rounded-xl shadow-2xl overflow-hidden
        transform transition-all duration-300
        ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}
      `}
      >
        <button
          onClick={close}
          className="absolute right-3 top-3 z-10 rounded-full p-2 bg-white/80 dark:bg-neutral-800 hover:scale-110 transition-transform duration-200"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 h-auto md:h-auto">
            <img
              src={photo.src}
              alt={photo.title}
              className="w-96 h-80 object-cover"
            />
          </div>
          <div className="p-4 md:w-auto">
            <h2 className="text-xl font-semibold">{photo.title}</h2>
            <p className="mt-2 text-sm">{photo.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {photo.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
