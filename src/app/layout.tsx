// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// // import { cn } from "@/lib/utils";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Bebas+Neue&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet"/>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
//           rel="stylesheet"
//         />
//         <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet"/>
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }


import localFont from "next/font/local";
import "./globals.css";


const bebasNeue = localFont({
  src: "../../public/fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
});

const arial = localFont({
  src: "../../public//fonts/Arial.ttf",
  variable: "--font-arial",
});

import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/Languagecontext";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


const playfair = localFont({
  src: "../../public/fonts/PlayfairDisplay-Italic.ttf",
  variable: "--font-playfair",
});


export const metadata = {
  title: "My App",
  description: "Using local fonts",


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${arial.variable} ${playfair.variable}`}
    >
      <body className="antialiasedd">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
