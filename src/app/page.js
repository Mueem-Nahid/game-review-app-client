import Games from "@/components/Games";
import {allGames} from "@/apiServices/games";
import Hero from "@/components/Hero";

export default async function Home({searchParams}) {
   const games = await allGames();

   return (
      <div>
         <Hero />
         <Games games={games}/>
      </div>
   );
}