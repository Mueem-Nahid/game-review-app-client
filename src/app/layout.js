import "./globals.css";
import Providers from "../components/Providers";
import Navbar from "@/components/Navbar";
import Head from "@/components/Head";

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
      </html>
   );
}