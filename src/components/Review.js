import {deleteReview} from "@/apiServices/review";

const Review = ({review, user, gameId}) => {
   const dateString = review?.commentedAt;
   const date = new Date(dateString);
   const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
   });

   const handleDeleteComment = async () => {
      try {
         await deleteReview(gameId, review?.id, user?.token);
         location.reload();
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div>
         <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
               <div className="flex items-center">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                     <div
                        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-green-300 rounded-full dark:bg-gray-600 mr-1">
                        <span className="font-medium text-gray-600 dark:text-gray-300">{review.rating}</span>
                     </div>
                     {review.commentedBy.first_name} {review.commentedBy?.last_name}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                     <time pubdate dateTime="2022-06-23"
                           title="June 23rd, 2022">{formattedDate}
                     </time>
                  </p>
               </div>
               {
                  user?.user_type === 'admin' &&
                  <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                          className="inline-flex rounded-full items-center p-2 text-sm font-medium text-center text-gray-400 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button" onClick={handleDeleteComment}>
                     <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g>
                           <path fill="none" d="M0 0h24v24H0z"/>
                           <path
                              d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"/>
                        </g>
                     </svg>
                  </button>
               }
            </footer>
            <p className="text-gray-500 dark:text-gray-400">{review.comment}</p>
         </article>
      </div>
   );
};

export default Review;