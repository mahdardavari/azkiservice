"use client";
import { useRouter } from "next/navigation";
import { photos } from "@/app/lib/data";
import Modal from "@/app/components/Share/ui/Modal";
import { ModalHeader } from "@/app/components/Share/ui/ModalHeader";
import { use } from "react";

export default function InterceptedModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const photo = photos.find((p) => p.id === id);

  if (!photo) return null;

  return (
    <Modal
      isOpen={true}
      onClose={() => router.back()}
      contentClassName="max-w-4xl"
    >
      <ModalHeader onClose={() => router.back()}>
        <h2 className="text-xl font-semibold">{photo.title}</h2>
      </ModalHeader>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-80 md:h-96 object-cover"
          />
        </div>
        <div className="p-6 md:w-1/3">
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {photo.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {photo.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
