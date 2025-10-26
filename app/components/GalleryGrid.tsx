"use client";
import Link from "next/link";
import Image from "next/image";
import { Photo } from "../lib/data";
import ImageCard from "./ImageCard";

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((p) => (
        <ImageCard key={p.id} photo={p} />
      ))}
    </div>
  );
}
