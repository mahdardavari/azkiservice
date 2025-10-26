"use client";
import Link from "next/link";
import Image from "next/image";
import { Photo } from "../lib/data";


export default function ImageCard({ photo }: { photo: Photo }) {
  return (
    <Link
      href={`/photos/${photo.id}`}
      className="block rounded-lg overflow-hidden group"
      prefetch={false}
    >
      <div className="relative h-64 sm:h-48 md:h-56 lg:h-64 bg-gray-200 group-hover:scale-105 transition-transform duration-300">
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
          <h3 className="text-sm font-semibold">{photo.title}</h3>
          <p className="text-xs opacity-90">{photo.tags.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
}
