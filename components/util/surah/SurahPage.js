"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const SurahPage = () => {
    const { surahId, pageNum } = useParams();
    const router = useRouter();
    const totalPages = 604;
    const initialPage = pageNum ? parseInt(pageNum) : 1;

    const [currentPage, setCurrentPage] = useState(initialPage);

    const imageUrl = `/images/surah/page${String(currentPage).padStart(3, '0')}.png`;

    const updateUrl = (newPage) => {
        router.replace(`/surahs/${newPage}`);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            updateUrl(newPage);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            updateUrl(newPage);
        }
    };

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    return (
        <div className=" bg-gray-100">
            <h2 className="text-center py-4 text-xl font-semibold flex items-center justify-center ">
                <button
                    onClick={() => router.push('/')}
                    className=" left-4 text-gray-700 focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                Surah {surahId} - Page {currentPage}
            </h2>


            <div className="flex justify-center items-center">
                <Image
                    src={imageUrl}
                    alt={`Surah ${surahId} Page ${currentPage}`}
                    width={1260}
                    height={2038}
                    priority
                    unoptimized
                    className=""
                />
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-between items-center py-4 px-8 shadow-md">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="text-gray-700 disabled:text-gray-400 focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="text-gray-700 disabled:text-gray-400 focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SurahPage;
