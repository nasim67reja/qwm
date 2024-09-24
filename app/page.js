import SurahList from "@/components/util/surahs/SurahList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Surah Listing</h1>
      <SurahList />
    </main>
  );
}
