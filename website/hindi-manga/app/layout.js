import {Outfit} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const outfit=Outfit({subsets:['latin']});
export const metadata = {
  title: "Hindi Manga",
  description: "It is Anime manga . create by Saiprasad Algulwad",
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider>
    <html lang="en">
  <head>
    <link rel='icon' type='image/png' href='./icon.png'/>
    </head>
      <body
       className={outfit.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
