import "./globals.css";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import Providers from "../components/Providers";

export default function RootLayout({children}) {
   return (
      <html lang="en">
      <body>
      <Providers>
         <Head/>
         <Navbar/>
         {children}
      </Providers>
      </body>
      </html>);
}