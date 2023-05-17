import AdminSidebar from "@/components/AdminSidebar";

export default function DashboardLayout({children}) {
   return (
      <>
         {children}
         <AdminSidebar/>
      </>
   );
}