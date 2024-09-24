// components/SurahCard.js
export default function SurahCard({ surah }) {
    return (
        <div className="border border-gray-300 p-5 rounded-lg shadow-md mb-4">
            <h2 className="font-arabic text-3xl mb-2">{surah.arabicName}</h2>
            <h3 className="text-xl font-semibold">{surah.englishName}</h3>
            <p className="text-sm text-gray-600">{surah.revelationType}</p>
        </div>
    );
}
