import React from "react";

export type VideoItem = {
    id: string;
    title: string;
};

export const currentEditionFilms: VideoItem[] = [
    {
        id: "1hJSzJSj4GU",
        title: "The Eagle Huntress (Vrijdag 10:00)",
    },
    {
        id: "JX9jasdi3ic",
        title: "Conclave (Vrijdag 14:00)",
    },
    {
        id: "oeWqQN3snCU",
        title: "I swear (Vrijdag 19:30)",
    },
    {
        id: "JjJflit-UeI",
        title: "Das Leben der Anderen (Zaterdag 19:30)",
    },
];

export default function VideoGrid({
    films = currentEditionFilms,
}: {
    films?: VideoItem[];
}) {
    return (
        <section id="videos">
            <div className="flex justify-center bg-[#5ba4cf] text-black text-2xl sm:text-3xl font-bold w-full py-6">
                BFF - Selectie Films 2027
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8 max-w-7xl mx-auto">
                {films.map((film, index) => (
                    <div
                        key={film.id + index}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="w-full aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${film.id}`}
                                title={film.title}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-black">
                            {film.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
