import Dashboard from "@/components/Dashboard";
import {allGames} from "@/apiServices/games";
import {cookies} from 'next/headers';
import {notFound} from "next/navigation";


export default async function DashboardPage() {
   const cookieStore = cookies();
   const user = cookieStore.get("user");
   if (!user) {
      return notFound()
   }
   const userObj = JSON.parse(user.value)
   if (userObj.user_type !== 'admin') {
      return notFound();
   }
   let games = [];
   try {
      games = await allGames();
   } catch (error) {
      console.log(error)
   }

   return (
      <Dashboard games={games}/>
   )
}