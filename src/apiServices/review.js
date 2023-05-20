import {fetchError} from "@/utils/utils";

export const addReview = async (id, payload, token) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/game/${id}/comments`, {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${token}`,
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
   });
   fetchError(response);
   return await response.json()
}

export const deleteReview = async (gameID, reviewId, token) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/game/${gameID}/comments/${reviewId}`, {
      method: 'DELETE',
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   fetchError(response);
}