"use client";
import { useRouter } from "next/navigation";
import { photos } from "@/app/lib/data";
import Modal from "@/app/components/Share/Modal";
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
      photo={photo}
      onClose={() => {
        // Close modal -> back to gallery
        router.back();
      }}
    />
  );
}
