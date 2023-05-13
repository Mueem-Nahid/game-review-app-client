export const allGames = async () => {
   const response = await fetch(
      `http://localhost:8000/all-games`,
      {next: {revalidate: 10000}}
   );
   const data = await response.json();
   console.log("this: ", data)
   return data.data.games;
}

export const getGame = async (id) => {
   const response = await fetch(
      `http://localhost:8000/game/${id}`
   );
   const data = await response.json();
   console.log("game: ", data)
   return data.data.game;
}