import React from "react";
import Image from "next/image";
import wijntje from "../components/Img/WijntjeBFF.png";
import sponsoren from "../components/Img/Sponsoren.png";

export default function OverBFFPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Foto Vergadering met een Wijntje */}
            <div className="flex justify-center pt-10 px-4">
                <div className="max-w-3xl w-full flex justify-center">
                    <Image
                        src={wijntje}
                        alt="Vergadering met een Wijntje"
                        className="w-auto max-h-[550px] object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Tekst Bestuur en vrijwilligers */}
            <div className="mx-auto max-w-3xl px-6 py-10 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                    Bestuur en vrijwilligers
                </h1>
                <p className="text-base sm:text-lg leading-relaxed">
                    Een filmfestival regel je niet zomaar. Daar gaan maanden
                    voorbereiding aan vooraf. Gelukkig hebben we een stel
                    super-enthousiaste vrijwilligers,
                    <br />
                    waarvan sommigen al meer dan 10 festivals georganiseerd
                    hebben
                </p>
            </div>

            {/* Sponsoren balk */}
            <div className="flex justify-center bg-[#5ba4cf] text-black text-2xl sm:text-3xl font-bold w-full py-6">
                Sponsoren
            </div>

            {/* Sponsoren afbeelding */}
            <div className="flex justify-center py-10 px-4">
                <div className="max-w-4xl w-full flex justify-center">
                    <Image
                        src={sponsoren}
                        alt="Sponsoren van het Bilts Filmfestival"
                        className="w-auto max-h-[450px] object-contain"
                    />
                </div>
            </div>

            {/* Contact */}
            <div className="mx-auto max-w-3xl px-6 py-8 border-t border-gray-400 flex justify-center">
                <div className="leading-relaxed text-base sm:text-lg">
                    <h3 className="font-bold text-xl mb-1">Contact:</h3>
                    Voorzitter: Marc Houtkooper (marc@houtkooper.com)
                    <br />
                    Locatie: Michaelkerk De Bilt (info@katholiekekerkdebilt.nl)
                    <br />
                    Marketing: Phillipe Terheggen (p.terheggen57@yahoo.com)
                    <br />
                    Sponsoren &amp; advertenties: Marc &amp; Phillipe
                    <br />
                    Kinderfilms: Frank Diepstraten (fenydiepstraten@casema.nl)
                    <br />
                    Techniek: Jeroen Vroom
                    <br />
                    Filmkeuze en rest vh bestuur: Gabriella de Martino, Reggy
                    van Caspel, Margot Oude Weenink, Hugo Siers
                    <br />
                </div>
            </div>
        </main>
    );
}
