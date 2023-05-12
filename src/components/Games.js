import Card from "@/components/Card";

const Games = ({games}) => {
   return (
      <div className="sm:grid grid-cols-1 max-w-6xl mx-auto py-4">
         {games.map((game) => (
            <Card key={game._id} game={game}/>
         ))}
      </div>
   );
};

export default Games;