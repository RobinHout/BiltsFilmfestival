import React from "react";

type PastFilm = {
    title: string;
    embedUrl: string;
};

type PastEdition = {
    year: string;
    films: PastFilm[];
};

const pastEditions: PastEdition[] = [
    {
        year: "2026",
        films: [
            {
                title: "Spijt",
                embedUrl: "https://www.youtube.com/embed/ZkYN8S-rkKs",
            },
            {
                title: "De acht bergen",
                embedUrl: "https://www.youtube.com/embed/ak4yBWxJDj8",
            },
            {
                title: "Forgiveness",
                embedUrl:
                    "https://www.youtube.com/embed/0Iw-6d9H1fw?si=P8DuPIbc-mNup7u7",
            },
            {
                title: "Perfect Days",
                embedUrl: "https://www.youtube.com/embed/QzZBbX5A1FA",
            },
        ],
    },
    {
        year: "2025",
        films: [
            {
                title: "Shoplifters",
                embedUrl: "https://www.youtube.com/embed/9382rwoMiRc",
            },
            {
                title: "One life",
                embedUrl: "https://www.youtube.com/embed/1EVPjV7Toho",
            },
            {
                title: "Quiet girl",
                embedUrl: "https://www.youtube.com/embed/LGWyqty2m-A",
            },
        ],
    },
    {
        year: "2024",
        films: [
            {
                title: "Living",
                embedUrl: "https://www.youtube.com/embed/OVo5kLt_-BU",
            },
            {
                title: "Close",
                embedUrl:
                    "https://www.youtube.com/embed/ZqPaPT6E_1k?si=InPdmwmikZBQWI5S",
            },
            {
                title: "Zee van tijd",
                embedUrl: "https://www.youtube.com/embed/DvlC6xfCKv8",
            },
        ],
    },
    {
        year: "2023",
        films: [
            {
                title: "The Father",
                embedUrl: "https://www.youtube.com/embed/4TZb7YfK-JI",
            },
            {
                title: "Supernova",
                embedUrl: "https://www.youtube.com/embed/bRz2hY6ykGE",
            },
            {
                title: "Nomadland",
                embedUrl: "https://www.youtube.com/embed/6sxCFZ8_d84",
            },
        ],
    },
    {
        year: "2022",
        films: [
            {
                title: "Greenbook",
                embedUrl: "https://www.youtube.com/embed/QkZxoko_HC0",
            },
            {
                title: "The children act",
                embedUrl: "https://www.youtube.com/embed/kKQkUcJioxU",
            },
            {
                title: "Roma",
                embedUrl: "https://www.youtube.com/embed/6BS27ngZtxg",
            },
        ],
    },
    {
        year: "2020",
        films: [
            {
                title: "Beautiful boy",
                embedUrl: "https://www.youtube.com/embed/y23HyopQxEg",
            },
            {
                title: "Sweet bean",
                embedUrl: "https://www.youtube.com/embed/KcwKPRfTMa4",
            },
            {
                title: "Capernaum",
                embedUrl: "https://www.youtube.com/embed/ULUo0048xZE",
            },
        ],
    },
];

export default function VorigeFestivalsPage() {
    return (
        <main className="min-h-screen bg-white text-black pb-12">
            {pastEditions.map((edition) => {
                const gridCols =
                    edition.films.length === 4
                        ? "lg:grid-cols-4"
                        : "lg:grid-cols-3";
                return (
                    <div key={edition.year} className="mb-4">
                        {/* Jaartal balk zoals in BFFoud */}
                        <div className="bg-[#5ba4cf] text-black text-2xl font-bold py-3 pl-[10%] sm:pl-[20%] w-full">
                            {edition.year}
                        </div>

                        {/* Films rij */}
                        <div
                            className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6 px-6 py-6 max-w-6xl mx-auto`}
                        >
                            {edition.films.map((film, idx) => (
                                <div
                                    key={film.title + idx}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-full aspect-video">
                                        <iframe
                                            src={film.embedUrl}
                                            title={film.title}
                                            className="w-full h-full border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            loading="lazy"
                                        />
                                    </div>
                                    <p className="mt-2 text-base sm:text-lg font-medium text-black">
                                        {film.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </main>
    );
}
