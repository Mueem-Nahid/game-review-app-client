import {fetchError} from "@/utils/utils";

export const loginUser = async (payload) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
   });
   fetchError(response);
   return await response.json()
}

export const signupUser = async (payload) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/register`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
   });
   fetchError(response);
   return await response.json()
};

export const findUser = async (id) => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/${id}`
   );
   fetchError(response);
   return await response.json();
}