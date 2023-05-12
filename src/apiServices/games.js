export const allGames = async () => {
   const response = await fetch(
      `http://localhost:8000/all-games`,
      {next: {revalidate: 10000}}
   );
   const data = await response.json();
   console.log("this: ", data)
   return data.data.games;
}