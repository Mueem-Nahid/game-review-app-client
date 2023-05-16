import GameRow from "@/components/GameRow";

const Dashboard = ({games}) => {
   return (
      <div className="p-4 sm:ml-64">
         <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  <th scope="col" className="px-6 py-3">
                     Game title
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Average rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Total reviews
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Action
                  </th>
               </tr>
               </thead>
               <tbody>
               {
                  games?.map((game) => (
                     <GameRow key={game._id} game={game}/>
                  ))
               }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Dashboard;