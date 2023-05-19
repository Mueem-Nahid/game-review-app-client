"use client"

import {useContext, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

import Error from "@/components/Error";
import Review from "@/components/Review";
import {addReview} from "@/apiServices/review";
import {UserContext} from "@/hooks/UserContext";

const Reviews = ({gameId, reviews}) => {
   const {user} = useContext(UserContext);
   const router = useRouter();
   const path = usePathname();
   const [allReviews, setAllReviews] = useState(reviews)
   const [rating, setRating] = useState(1);
   const [comment, setComment] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!user) {
         return router.push(`/login?from=${encodeURIComponent(path)}`);
      }
      const words = comment.split(' ');
      const hasMoreThanThreeWords = words.length >= 3;
      if (!hasMoreThanThreeWords) {
         return setError('Review must contain at least 3 words.')
      }
      const data = await addReview(gameId, {comment, rating}, user.token);
      if (data.status === 200) {
         setAllReviews([...allReviews, data.data])
      } else {
         setError(data.message)
      }
   };

   return (
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
         <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Reviews</h2>
            </div>
            <form className="mb-6">
               <div
                  className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center">
                     {[...Array(5)].map((rate, index) => {
                        index += 1;
                        return (
                           <svg onClick={() => setRating(index)} key={index} aria-hidden="true"
                                className={`w-5 h-5 cursor-pointer ${rating >= index ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title>
                              <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                           </svg>
                        );
                     })}
                  </div>

                  <textarea id="review" rows="3" onChange={(e) => setComment(e.target.value)}
                            className="px-0 mt-2 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write your review..." required></textarea>
               </div>
               {
                  error && <Error error={error}/>
               }
               <button type="submit" onClick={handleSubmit}
                       className="inline-flex mt-3 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Post review
               </button>
            </form>
            {
               allReviews?.map((review, i) => (
                  <Review key={i} review={review} user={user}/>
               ))
            }
         </div>
      </section>
   );
};

export default Reviews;