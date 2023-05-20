import Games from "@/components/Games";
import {allGames} from "@/apiServices/games";
import Hero from "@/components/Hero";

export default async function Home({searchParams}) {
   let games = [];

   try {
      games = await allGames();
   } catch (error) {
      console.log(error)
   }

   return (
      <div>
         <Hero/>
         <Games games={games}/>
      </div>
   );
}