import Card from "@/components/Card";

const Games = ({games}) => {
   console.log(games)
   return (
      <div className="flex flex-col justify-center items-center">
         <h1
            className="mb-6 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Latest games
         </h1>
         <div className="sm:grid grid-cols-1 max-w-6xl mx-auto py-6">
            {games.length ? games.map((game) => (
               <Card key={game._id} game={game}/>
            )) :
               <h1
                  className="text-2xl font-extrabold dark:text-white">
                  No games available
               </h1>}
         </div>
      </div>
   );
};

export default Games;