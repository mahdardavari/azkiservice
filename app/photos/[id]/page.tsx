import { notFound } from "next/navigation";
import Link from "next/link";
import { photos } from "@/app/lib/data";
import Image from "next/image";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = photos.find((p) => p.id === id);
  if (!photo) return notFound();

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="rounded-xl overflow-hidden shadow-lg relative h-96 md:h-[600px]">
        <Image
          src={photo.src}
          alt={photo.title}
          className="w-full h-auto object-cover"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <h1 className="text-3xl font-bold mt-6">{photo.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {photo.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {photo.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Link
        href="/"
        className="inline-block mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        ← Back to Gallery
      </Link>
    </div>
  );
}
