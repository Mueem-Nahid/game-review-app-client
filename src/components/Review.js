const Review = ({review}) => {
   const dateString = review?.commentedAt;
   const date = new Date(dateString);
   const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
   });

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
            </footer>
            <p className="text-gray-500 dark:text-gray-400">{review.comment}</p>
         </article>
      </div>
   );
};

export default Review;