import {getGame} from "@/apiServices/games";
import Reviews from "@/components/Reviews";


export default async function GamePage({params}) {
   const gameId = params.id;
   const game = await getGame(gameId);
   const dateString = game?.releaseDate;
   const date = new Date(dateString);
   const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
   });
   return (
      <div className="w-full">
         <div
            className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            <img
               src={game?.picture[0].url}
               width={500}
               height={300}
               className="rounded-lg"
               placeholder="blur"
               // blurDataURL="/spinner.svg"
               alt="Movie poster"
            />
            <div className="p-2">
               <h2 className="text-lg mb-3 font-bold">
                  {game?.title}
               </h2>
               <p className="text-lg mb-3">
                  <span className="font-semibold mr-1">Summary:</span>
                  {game?.summary}
               </p>
               <p className="mb-3">
                  <span className="font-semibold mr-1">Date Released:</span>
                  {formattedDate}
               </p>
               <p className="mb-3">
                  <span className="font-semibold mr-1">Rating:</span>
                  {game?.averageRating}
               </p>
            </div>
         </div>
         <div>
            <Reviews reviews={game?.reviewComments}/>
         </div>
      </div>
   );
}