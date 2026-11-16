import React from "react";
import Image from "next/image";
import VideoGrid from "./components/trailerComponent";
import logoBff from "./components/Img/LogoBFF.png";
import kerkBinnen from "./components/Img/KerkBinnen.png";
import kerkBuiten from "./components/Img/KerkBuiten.png";
import groepsFoto from "./components/Img/GroepsFotoBFF.png";

export default function HomePage() {
    return (
        <main id="main" className="bg-white text-black min-h-screen">
            {/* Home Tekst */}
            <div className="mx-auto max-w-3xl px-6 py-12 text-center">
                <h1 className="pb-4 text-3xl sm:text-4xl font-bold">
                    Het Bilts Filmfestival
                </h1>
                <p className="text-base sm:text-lg leading-relaxed font-sans">
                    Het Bilts Filmfestival heeft als doel het vertonen van
                    films die aanzetten tot nadenken en innerlijke reflectie.
                    Het festival richt zich op het presenteren van kwalitatief
                    hoogstaande films die inzicht geven in menselijke emoties
                    en ervaringen. Daarnaast streeft het festival ernaar een
                    ontmoetingsplaats te zijn voor de gemeenschap van De Bilt en
                    omstreken, waarbij bezoekers na de vertoningen kunnen
                    napraten en hun indrukken delen. (bron:Vierklank)
                </p>
            </div>

            {/* Selectie Films & Trailers */}
            <VideoGrid />

            {/* Volgend Festival */}
            <div className="flex flex-col items-center bg-[#d3d3d3] py-10 px-4 text-center">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold py-4">
                    Op vrijdag 12 februari en zaterdag 13 februari 2027!
                </h2>
                <div className="w-4/5 max-w-3xl my-4 flex justify-center">
                    <Image
                        src={logoBff}
                        alt="Logo van het Bilts Filmfestival"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold py-4">
                    Locatie: Kerklaan 31 in De Bilt
                </h2>
            </div>

            {/* Foto's onderaan zoals in BFFoud */}
            <div className="flex flex-col items-center py-8 px-4">
                <div className="flex flex-col sm:flex-row justify-evenly items-center gap-6 mb-8 w-full max-w-6xl">
                    <div className="w-full sm:w-[35%] flex justify-center">
                        <Image
                            src={kerkBinnen}
                            alt="Foto van de Michaelkerk van binnen"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full sm:w-[35%] flex justify-center">
                        <Image
                            src={kerkBuiten}
                            alt="Foto van de Michaelkerk van buiten"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
                <div className="w-full sm:w-[45%] max-w-2xl pb-8 flex justify-center">
                    <Image
                        src={groepsFoto}
                        alt="Groepsfoto van de commissie van het Bilts Filmfestival"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-[#add8e6] py-10 px-6 text-center text-black">
                <p className="text-base sm:text-lg">
                    Al uw filmtips, passend in het karakter van de eerdere
                    BFF-films, kunt u mailen naar:
                </p>
                <p className="mt-1 text-base sm:text-lg font-medium">
                    <a
                        href="mailto:info@biltsfilmfestival.nl"
                        className="hover:underline"
                    >
                        info@biltsfilmfestival.nl
                    </a>
                </p>
            </footer>
        </main>
    );
}
