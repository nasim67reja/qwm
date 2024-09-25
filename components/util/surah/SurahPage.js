"use client"
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { PUBLIC_API } from "@/config/services/axios.service";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BUCKETURL } from "@/config/path";

const SurahPage = () => {
    const { surahId, pageNum } = useParams();
    const router = useRouter();
    const totalPages = 604;
    const initialPage = pageNum ? parseInt(pageNum) : 1;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [pageDetails, setPageDetails] = useState(null);  // Store API response
    const [audioFile, setAudioFile] = useState('');        // Store audio file URL

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

    useEffect(() => {
        const fetchPageDetails = async () => {
            try {
                const response = await PUBLIC_API.post('/content/page-details', {
                    reciter_id: "maryam",
                    content_type: "page",
                    number: currentPage,
                    version: "v1",
                });
                setPageDetails(response.data);
                console.log("response", response.data)
                setAudioFile(response.data.data.audio_file);  // Set the audio file URL from the response
            } catch (error) {
                console.error("Error fetching page details:", error);
            }
        };

        fetchPageDetails();
    }, []);
    console.log("audioFile", audioFile)
    return (
        <div className="bg-gray-100">
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
                    className="w-[80%] h-auto"
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

                {audioFile && (
                    <div className="flex justify-center mt-4 border-4">
                        <AudioPlayer
                            src={`${BUCKETURL}${audioFile.replace(/^public\//, '')}`}  // Remove "public/" if present
                            autoPlay={false}
                            controls
                        />
                    </div>
                )}

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
