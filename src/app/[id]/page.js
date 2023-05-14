import {findUser} from "@/apiServices/authentication";
import {notFound, redirect} from "next/navigation";


export default async function AdminPage(req) {
   const id = req.params.id;
   const data = await findUser(id);
   if (data?.data?.user) {
      return redirect(`${id}/dashboard`);
   }
   return notFound()
}