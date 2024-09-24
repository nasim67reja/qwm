// components/SurahList.js
import SurahCard from './SurahCard';
import surahData from "../../../data/jsons/jsons/surah.json";
export default function SurahList() {


    const surahs = surahData.chapters;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surahs.map((surah) => (
                <SurahCard
                    key={surah.id}
                    surah={{
                        arabicName: surah.name_arabic,
                        englishName: surah.name_complex,
                        revelationType: surah.revelation_place === 'makkah' ? 'Makki' : 'Madani',
                        linkTo: surah.pages[0]
                    }}
                />
            ))}
        </div>
    );
}
