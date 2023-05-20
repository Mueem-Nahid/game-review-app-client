import {fetchError} from "@/utils/utils";

export const allGames = async () => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/all-games`,
      {cache: "no-store", next: {revalidate: 0}}
   );
   fetchError(response);
   const data = await response.json();
   return data.data.games;
}

export const getGame = async (id) => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/game/${id}`,
      {cache: "no-store", next: {revalidate: 0}}
   );
   fetchError(response);
   const data = await response.json();
   return data.data.game;
}

export const uploadImages = async (formData, path, token) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/uploadImages`, {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${token}`,
         },
         body: formData,
      });
      const data = await response.json();
      return data?.data?.images;
   } catch (error) {
      console.error(error);
      return null;
   }
};

export const addNewGame = async (payload, token) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/add-game`, {
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
