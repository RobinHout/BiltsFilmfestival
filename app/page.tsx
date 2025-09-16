import Link from "next/link";
import Image from "next/image";
import React from "react";
import type { StaticImageData } from "next/image";
import group from "./components/Img/GroepsFotoBFF.png";

// -------- Types
type MediaItem = {
    type: "image" | "video";
    src: string | StaticImageData;
    alt?: string;
    caption?: string;
};

type MediaSectionProps = {
    id: string;
    title: string;
    description?: string;
    items: MediaItem[];
};

// -------- Components
function SectionHeader({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-6 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
                {title}
            </h2>
            {description ? (
                <p className="max-w-2xl text-lg text-neutral-700">
                    {description}
                </p>
            ) : null}
        </div>
    );
}

function MediaCard({ item }: { item: MediaItem }) {
    return (
        <figure className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            {item.type === "image" ? (
                <Image
                    src={group}
                    alt={item.alt || "Afbeelding"}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover sm:h-64"
                />
            ) : (
                <video
                    controls
                    className="h-56 w-full object-cover sm:h-64"
                    aria-label={item.alt || "Video"}
                >
                    <source src="Tijdelijk" />
                    Uw browser ondersteunt het video-element niet.
                </video>
            )}
            {item.caption ? (
                <figcaption className="px-4 py-3 text-base text-neutral-800">
                    {item.caption}
                </figcaption>
            ) : null}
        </figure>
    );
}

function MediaSection({ id, title, description, items }: MediaSectionProps) {
    return (
        <section id={id} className="py-10">
            <SectionHeader title={title} description={description} />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it, i) => (
                    <MediaCard key={id + i} item={it} />
                ))}
            </div>
        </section>
    );
}

// -------- Demo content (vervang deze paden door eigen foto's/filmpjes)
const demoFotos: MediaItem[] = [
    {
        type: "image",
        src: group,
        alt: "Publiek in de zaal",
        caption: "Sfeerbeeld",
    },
    {
        type: "image",
        src: "./components/Img/GroepsFotoBFF.png",
        alt: "Filmprojector",
        caption: "Achter de schermen",
    },
    {
        type: "image",
        src: "./components/Img/GroepsFotoBFF.png",
        alt: "Vrijwilligers",
    },
];

const demoVideos: MediaItem[] = [
    {
        type: "video",
        src: "/placeholder/trailer-1.mp4",
        alt: "Trailer 1",
        caption: "Trailer – Vrijdag",
    },
    {
        type: "video",
        src: "/placeholder/trailer-2.mp4",
        alt: "Trailer 2",
        caption: "Trailer – Zaterdag",
    },
    { type: "image", src: "/placeholder/800x500-4.jpg", alt: "Q&A" },
];

// -------- Page
export default function HomePage() {
    return (
        <main id="main" className="bg-whit text-black ">
            {/* Hero */}
            <section className="border-b border-neutral-200 bg-gray-200 text-black">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Bilts Filmfestival
                    </h1>
                    <p className="max-w-2xl text-lg text-black/90">
                        Het Bilts Filmfestival heeft als doel het vertonen van
                        films die aanzetten tot nadenken en innerlijke
                        reflectie. Het festival richt zich op het presenteren
                        van kwalitatief hoogstaande films die inzicht geven in
                        menselijke emoties en ervaringen. Daarnaast streeft het
                        festival ernaar een ontmoetingsplaats te zijn voor de
                        gemeenschap van De Bilt en omstreken, waarbij bezoekers
                        na de vertoningen kunnen napraten en hun indrukken
                        delen. (bron:Vierklank)
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="#fotos"
                            className="rounded-xl border border-white/30 px-5 py-2 text-base font-medium bg-white text-black hover:shadow-md hover:opacity-90"
                        >
                            Bekijk foto’s
                        </Link>
                        <Link
                            href="#videos"
                            className="rounded-xl bg-black px-5 py-2 text-base font-semibold text-white hover:shadow-lg hover:opacity-90"
                        >
                            Bekijk trailers
                        </Link>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Segmenten */}

                <MediaSection
                    id="fotos"
                    title="Foto’s"
                    description="Een selectie beelden. Vervang de placeholders door eigen foto’s."
                    items={demoFotos}
                />

                <MediaSection
                    id="videos"
                    title="Filmpjes & trailers"
                    description="Laat korte trailers of interviews zien. MPEG/MP4 werkt in de meeste browsers."
                    items={demoVideos}
                />

                {/* Extra segment – leeg sjabloon */}
                <MediaSection
                    id="extra"
                    title="Extra segment"
                    description="Gebruik dit blok voor aankondigingen, Q&A of juryleden. Je kunt zowel foto’s als video’s mengen."
                    items={[]}
                />
            </div>

            {/* Footer */}
            <footer className="mt-8 border-t border-neutral-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-8 text-neutral-700 sm:px-6 lg:px-8">
                    <p className="text-base">
                        © {new Date().getFullYear()} Bilts Filmfestival
                    </p>
                    <p className="text-base">
                        Vragen? Mail naar{" "}
                        <a
                            className="underline"
                            href="mailto:info@biltsfilmfestival.nl"
                        >
                            info@biltsfilmfestival.nl
                        </a>
                    </p>
                </div>
            </footer>
        </main>
    );
}
