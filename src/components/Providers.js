"use client";

import {ThemeProvider} from "next-themes";
import {UserProvider} from "@/hooks/UserContext";

export default function Providers({children}) {
   return (
      <ThemeProvider enableSystem={true} attribute="class">
         <UserProvider>
            <div>
               {children}
            </div>
         </UserProvider>
      </ThemeProvider>
   );
}