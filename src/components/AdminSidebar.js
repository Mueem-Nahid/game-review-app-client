"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

import AddGame from "@/components/AddGame";
import Dashboard from "@/components/Dashboard";

const AdminSidebar = () => {
   const pathname = usePathname();
   const pageType = pathname.split('/')[2];

   return (
      <div>
         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                 aria-controls="default-sidebar" type="button"
                 className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
               <path clipRule="evenodd" fillRule="evenodd"
                     d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside id="default-sidebar"
                className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar">
            <div className="h-full px-3 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium pl-8">
                  <li>
                     <Link href='/dashboard'
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                             className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                           <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span className="ml-3">Dashboard</span>
                     </Link>
                  </li>

                  <li>
                     <Link href='/dashboard/add-game'
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true"
                             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                           <path
                              d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Add Game</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </aside>
         {
            pageType === 'dashboard' ? <Dashboard/> :
               pageType === 'add-game' ? <AddGame/> :
                  ''
         }
      </div>
   );
};

export default AdminSidebar;