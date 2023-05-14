export const loginUser = async (payload) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
   });
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
   return await response.json()
}