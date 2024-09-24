// components/SurahList.js
import SurahCard from './SurahCard';

export default function SurahList() {
    const surahs = [
        { number: 1, arabicName: 'الفاتحة', englishName: 'Al-Fatiha', revelationType: 'Makki' },
        { number: 2, arabicName: 'البقرة', englishName: 'Al-Baqarah', revelationType: 'Madani' },
        { number: 3, arabicName: 'آل عمران', englishName: 'Al-Imran', revelationType: 'Madani' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surahs.map((surah) => (
                <SurahCard key={surah.number} surah={surah} />
            ))}
        </div>
    );
}
