"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PUBLIC_API } from "@/config/services/axios.service";
import { BUCKETURL } from "@/config/path";
import Apiurls from "@/helper/Apiurls";

const SurahPageText = () => {
    const { surahId, pageNum } = useParams();
    const router = useRouter();
    const totalPages = 604;
    const initialPage = pageNum ? parseInt(pageNum) : 1;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [pageDetails, setPageDetails] = useState(null);  // Store API response
    const [audioFile, setAudioFile] = useState('');        // Store audio file URL
    const [currentAyat, setCurrentAyat] = useState(null);  // Store current ayat

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

    // Fetch page details, including Quran text and audio file
    // useEffect(() => {
    //     const fetchPageDetails = async () => {
    //         try {
    //             // Fetch Quranic text and metadata from alquran.cloud API
    //             const response = await fetch(`https://api.alquran.cloud/v1/surah/${1}`);
    //             const data = await response.json();
    //             setPageDetails(data.data);  // Update page details with the fetched ayah data

    //             // Fetch the audio file (this part stays the same as in your original code)
    //             const audioResponse = await PUBLIC_API.post(Apiurls.PAGE_CONTENT, {
    //                 reciter_id: "maryam",
    //                 content_type: "page",
    //                 number: currentPage,
    //                 version: "v1",
    //             });
    //             setAudioFile(audioResponse.data.data.audio_file);
    //         } catch (error) {
    //             console.error("Error fetching page details:", error);
    //         }
    //     };

    //     fetchPageDetails();
    // }, [currentPage, surahId]);

    const [ayatMapping, setAyatMapping] = useState(null);
    useEffect(() => {
        const fetchPageDetails = async () => {
            try {

                const ayatResponse = await fetch(`https://api.alquran.cloud/v1/surah/${1}`);
                const data = await ayatResponse.json();
                setAyatMapping(data.data);

                const response = await PUBLIC_API.post(Apiurls.PAGE_CONTENT, {
                    reciter_id: "maryam",
                    content_type: "page",
                    number: currentPage,
                    version: "v1",
                });
                setPageDetails(response.data.data);
                setAudioFile(response.data.data.audio_file);
            } catch (error) {
                console.error("Error fetching page details:", error);
            }
        };

        fetchPageDetails();
    }, []);


    // const handleTimeUpdate = (currentTime) => {
    //     const currentTimeMs = currentTime * 1000;
    //     const currentAyatData = pageDetails.ayahs.find(
    //         (ayat) => currentTimeMs >= ayat.start_time_ms && currentTimeMs <= ayat.end_time_ms
    //     );

    //     if (currentAyatData && currentAyatData.number !== currentAyat) {
    //         setCurrentAyat(currentAyatData.number);
    //     }
    //     console.log("currentAyat", currentAyat)

    // };

    const handleTimeUpdate = (currentTime) => {
        // Convert current time in seconds to milliseconds
        const currentTimeMs = currentTime * 1000;

        // Find the current ayat based on the current time
        const currentAyatData = pageDetails.ayat_mapping.find(
            (ayat) => currentTimeMs >= ayat.start_time_ms && currentTimeMs <= ayat.end_time_ms
        );

        if (currentAyatData && currentAyatData.ayah_no !== currentAyat) {
            setCurrentAyat(currentAyatData.ayah_no);
        }
        console.log("currentAyat", currentAyat)

    };

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

            <div className="flex flex-col items-center mx-auto relative p-4">
                {/* Display Ayat text */}
                {ayatMapping && ayatMapping.ayahs.map((ayat, i) => (
                    <p
                        key={i}
                        className={`text-lg my-2 ${ayat.number === currentAyat ? 'bg-yellow-300' : ''}`}
                    >
                        {ayat.number}: {ayat.text}
                    </p>
                ))}

                {/* Highlighting the currently playing ayat */}
                {currentAyat && (
                    <div className="text-yellow-500 font-bold">
                        Ayat {currentAyat} is currently being played.
                    </div>
                )}
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
                            src={`${BUCKETURL}${audioFile.replace(/^public\//, '')}`}
                            autoPlay={false}
                            controls
                            onListen={(e) => handleTimeUpdate(e.target.currentTime)}
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

export default SurahPageText;
