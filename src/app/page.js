import Games from "@/components/Games";
import {allGames} from "@/apiServices/games";

export default async function Home({searchParams}) {
   const games = await allGames();

   return (
      <div>
         <Games games={games}/>
      </div>
   );
}