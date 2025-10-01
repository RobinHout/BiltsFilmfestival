import React from "react";
import Image, { type StaticImageData } from "next/image";
import group from "../components/Img/GroepsFotoBFF.png";
import logo from "../components/Img/LogoBFF.png";
import kerkbuiten from "../components/Img/KerkBuiten.png";
import kerkbinnen from "../components/Img/KerkBinnen.png";
import vergadering from "../components/Img/VergaderingBFF.png";
import wijntje from "../components/Img/WijntjeBFF.png";

export type MosaicImage = {
    src: string | StaticImageData; // /public path or imported image
    alt?: string;
};

export type FullBleedMosaicProps = {
    id?: string;
    title?: string;
    // images: MosaicImage[]; // expect at least 5; will auto-fill if fewer
    className?: string;
};

const images: MosaicImage[] = [
    { src: group, alt: "Publiek" }, // uit /public
    { src: logo, alt: "Zaal" }, // geïmporteerd
    { src: kerkbuiten, alt: "Projector" },
    { src: kerkbinnen, alt: "Q&A" },
    { src: vergadering, alt: "Vrijwilligers" },
    { src: wijntje, alt: "Vrijwilligers" },
];

// accept only absolute/public/data or http(s) URLs when a string is given
function isValidStringSrc(s: string) {
    return (
        s.startsWith("/") ||
        s.startsWith("http://") ||
        s.startsWith("https://") ||
        s.startsWith("data:")
    );
}

export default function fotoScroll({
    id,
    title,
    className,
}: FullBleedMosaicProps) {
    // ensure exactly 5 images (fill with placeholders if needed)
    const five = images.slice(0, 5);
    while (five.length < 5) {
        five.push({ src: "/placeholder/800x500-1.jpg", alt: "Placeholder" });
    }

    // 12-col grid layout (first tile large, rest smaller) — covers full width
    const tileClasses = [
        "md:col-span-6 md:row-span-2",
        "md:col-span-3 md:row-span-1",
        "md:col-span-3 md:row-span-1",
        "md:col-span-3 md:row-span-1",
        "md:col-span-3 md:row-span-1",
    ];

    const renderImg = (src: string | StaticImageData, alt?: string) => {
        const ok =
            typeof src === "string"
                ? isValidStringSrc(src)
                    ? src
                    : undefined
                : src;
        if (!ok) {
            return (
                <div className="grid h-full w-full place-content-center bg-neutral-200 text-neutral-500">
                    <span>Afbeelding niet gevonden</span>
                </div>
            );
        }
        return (
            <Image
                src={ok}
                alt={alt || "Afbeelding"}
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
                priority
            />
        );
    };

    return (
        <section id={id} className={className}>
            {title ? (
                <div className="mb-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-black">
                        {/* {title} */}
                    </h2>
                </div>
            ) : null}

            {/* Full-bleed wrapper */}
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
                <div className="grid auto-rows-[180px] gap-1 sm:gap-1.5 md:grid-cols-12 md:auto-rows-[220px] md:gap-2 lg:auto-rows-[260px] lg:gap-2.5">
                    {five.map((it, i) => (
                        <div
                            key={(id || "mosaic") + i}
                            className={`overflow-hidden ${
                                tileClasses[i] || "md:col-span-3"
                            }`}
                        >
                            {renderImg(it.src, it.alt)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
