import Link from "next/link";
import React from "react";
import FullBleedMosaic from "./components/fotoScroll";
// import VideoGrid from "./components/trailerComponent";
// -------- Components

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
                <FullBleedMosaic id="bla" title="iets" />
                {/* <VideoGrid /> */}
            </div>

            {/* Footer */}
            <footer className="mt-8 border-t border-neutral-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-8 text-neutral-700 sm:px-6 lg:px-8">
                    <p className="text-base">
                        © {new Date().getFullYear()} Bilts Filmfestival
                    </p>
                    <p className="text-base">
                        Al uw filmtips, passend in het karakter van de eerdere
                        BFF-films, kunt u mailen naar:
                        <a
                            className="underline"
                            href="mailto:info@biltsfilmfestival.nl"
                        >
                            info@houtkooper.nl
                        </a>
                    </p>
                </div>
            </footer>
        </main>
    );
}
