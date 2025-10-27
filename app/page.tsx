import GalleryGrid from "./components/GalleryGrid";
import ThemeToggle from "./components/Share/ThemeToggle";

import { photos } from "./lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl  flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl flex w-full justify-center">hiking</h1>
        <ThemeToggle />
        <GalleryGrid photos={photos} />
      </main>
    </div>
  );
}
