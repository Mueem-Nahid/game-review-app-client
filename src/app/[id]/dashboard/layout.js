import AdminSidebar from "@/components/AdminSidebar";

export default function DashboardLayout({children}) {
   return (
      <AdminSidebar>
         {children}
      </AdminSidebar>
   );
}