// import React from "react";

// export type VideoItem = {
//     /** YouTube id (e.g. dQw4w9WgXcQ) or full URL */
//     id?: string;
//     url?: string;
//     title: string;
//     text?: string;
// };

// export type VideoGridProps = {
//     id?: string;
//     heading?: string;
//     description?: string;
//     videos: VideoItem[]; // supports 3 or 4 items (will render up to 4)
//     className?: string;
// };

// const videos: VideoItem[] = [];

// function parseYouTubeId({ id, title }): string | null {
//     // if (!input) return null;
//     // If it's already an 11-char id-like string
//     // if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

    
// }

// function toEmbedSrc(item: VideoItem): string | null {
//     const id = parseYouTubeId(item.id || item.url);
//     return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
// }

// export default function VideoGrid() {
//     const list = videos.slice(0, 4); // render up to 4
//     const count = list.length;
//     const layout = count === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"; // 3 or 4 on large screens

//     return (
//         <section id={input.id} className={className}>
//             {(heading || description) && (
//                 <div className="mb-6 px-4 sm:px-6 lg:px-8">
//                     {heading && (
//                         <h2 className="text-2xl font-semibold tracking-tight text-black">
//                             {heading}
//                         </h2>
//                     )}
//                     {description && (
//                         <p className="mt-2 max-w-2xl text-lg text-neutral-700">
//                             {description}
//                         </p>
//                     )}
//                 </div>
//             )}

//             <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`}>
//                 <div
//                     className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${layout}`}
//                 >
//                     {list.map((v, i) => {
//                         const src = toEmbedSrc(v);
//                         return (
//                             <figure
//                                 key={(id || "videos") + i}
//                                 className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
//                             >
//                                 {/* 16:9 responsive iframe */}
//                                 <div className="relative w-full pt-[56.25%]">
//                                     {src ? (
//                                         <iframe
//                                             src={src}
//                                             title={v.title}
//                                             className="absolute inset-0 h-full w-full"
//                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                                             allowFullScreen
//                                             loading="lazy"
//                                         />
//                                     ) : (
//                                         <div className="absolute inset-0 grid place-content-center bg-neutral-100 text-neutral-500">
//                                             Ongeldige YouTube-link
//                                         </div>
//                                     )}
//                                 </div>
//                                 {(v.title || v.text) && (
//                                     <figcaption className="px-4 py-3 text-neutral-800">
//                                         {v.title && (
//                                             <h3 className="text-base font-semibold leading-tight">
//                                                 {v.title}
//                                             </h3>
//                                         )}
//                                         {v.text && (
//                                             <p className="mt-1 text-base text-neutral-700">
//                                                 {v.text}
//                                             </p>
//                                         )}
//                                     </figcaption>
//                                 )}
//                             </figure>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }
