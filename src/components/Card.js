import Link from "next/link";

const Card = ({game}) => {
   const dateString = game?.releaseDate;
   const date = new Date(dateString);
   const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
   });

   return (
      <div className="flex flex-col justify-center mb-4">
         <div
            className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-md shadow-sm p-3 max-w-fit mx-auto border border-white bg-white">
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
               <img
                  src={game?.picture[0].url}
                  alt="game picture" className="rounded-md"/>
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
               <div className="flex justify-between item-center">
                  <p className="text-gray-500 font-medium hidden md:block">Game</p>
                  <div className="flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                          fill="currentColor">
                        <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                     </svg>
                     <p className="text-gray-600 font-bold text-sm ml-1">
                        {game?.averageRating.toFixed(2)}
                        <span className="text-gray-500 font-normal"> ({game?.totalReviews} reviews)</span>
                     </p>
                  </div>
                  <div className="">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                          fill="currentColor">
                        <path fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"/>
                     </svg>
                  </div>
                  <Link href={`/game/${game._id}`}>
                     <div
                        className="bg-gray-200 px-3 py-1 cursor-pointer rounded-full text-xs font-bold text-gray-800 block">
                        View Details
                     </div>
                  </Link>
               </div>
               <Link href={`/game/${game._id}`}><h3
                  className="font-black text-gray-800 md:text-3xl text-xl cursor-pointer">{game?.title}</h3></Link>
               <p className="md:text-lg text-gray-500 text-base">{game?.summary.substring(0, 250)}...</p>
               <p className="text-base font-black text-gray-800">
                  Released at: {" "}
                  <span className="font-normal text-gray-600 text-base">{formattedDate}</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Card;