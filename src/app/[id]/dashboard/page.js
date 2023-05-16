import Dashboard from "@/components/Dashboard";
import AdminSidebar from "@/components/AdminSidebar";
import {allGames} from "@/apiServices/games";
import {Suspense} from "react";
import Loading from "@/app/[id]/dashboard/loading";


export default async function DashboardPage() {
   const games = await allGames();
   return (
      <AdminSidebar>
         <Suspense fallback={<Loading/>}>
            <Dashboard games={games}/>
         </Suspense>
      </AdminSidebar>
   )
}