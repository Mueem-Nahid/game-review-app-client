import AdminSidebar from "@/components/AdminSidebar";

export default function DashboardLayout({children}) {
   return (
      <section>
         <AdminSidebar>
            {children}
         </AdminSidebar>
      </section>
   );
}