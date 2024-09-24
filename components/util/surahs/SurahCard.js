"use client"
import { useRouter } from "next/navigation";

// components/SurahCard.js
export default function SurahCard({ surah }) {
    const router = useRouter();

    const handleClick = () => {
        // Navigate to the corresponding Surah's page
        router.push(`/surahs/${surah.linkTo}`);
    };
    return (
        <div className="border border-gray-300 p-5 rounded-lg shadow-md mb-4 cursor-pointer"
            onClick={handleClick}>
            <h2 className="font-arabic text-3xl mb-2">{surah.arabicName}</h2>
            <h3 className="text-xl font-semibold">{surah.englishName}</h3>
            <p className="text-sm text-gray-600">{surah.revelationType}</p>
        </div>
    );
}
