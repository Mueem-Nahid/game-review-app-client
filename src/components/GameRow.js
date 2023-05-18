import Link from "next/link";

const GameRow = ({game}) => {
   return (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {game.title}
         </th>
         <td className="px-6 py-4">
            {game.averageRating}
         </td>
         <td className="px-6 py-4">
            {game.totalReviews}
         </td>
         <td className="px-6 py-4">
            <Link href={`game/${game._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
         </td>
      </tr>
   );
};

export default GameRow;