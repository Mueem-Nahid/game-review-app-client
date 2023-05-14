"use client"

import Link from "next/link";
import Cookies from 'js-cookie';
import {Fragment, useContext, useEffect} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'

import {UserContext} from "@/hooks/UserContext";


function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
   const {user, setUser} = useContext(UserContext);

   const handleSignOut = () => {
      Cookies.remove('user');
      setUser({});
   }

   useEffect(() => {
      Cookies.get('user') && setUser(JSON.parse(Cookies.get('user')));
   }, []);

   return (
      <Disclosure as="nav" className="bg-gray-100 sticky top-0">
         {({open}) => (
            <>
               <div className="mx-4 sm:px-6 lg:px-8">
                  <div className="relative flex items-center justify-between">
                     <div className="flex flex-1 items-center justify-between sm:items-stretch ">
                        <div className="flex flex-shrink-0 items-center cursor-pointer py-1">
                           <Link href='/'>
                              <img
                                 className="block h-12 w-12 lg:hidden"
                                 src="/logo.png"
                                 alt="Game Insights"
                              />
                              <img
                                 className="hidden h-14 w-14 lg:block"
                                 src="/logo.png"
                                 alt="Game Insights"
                              />
                           </Link>
                           <Link
                              href='/'
                              className='text-2xl font-bold p-2'
                           >
                              Game Insights
                           </Link>
                        </div>
                     </div>
                     <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        {
                           user ?
                              <Menu as="div" className="relative ml-3">
                                 <div>
                                    <Menu.Button
                                       className="flex text-sm">
                                       <span className="sr-only">Open user menu</span>
                                       <p className='font-bold'>{user.username}</p>
                                    </Menu.Button>
                                 </div>
                                 <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                 >
                                    <Menu.Items
                                       className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                       <Menu.Item>
                                          {({active}) => (
                                             <Link
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                             >
                                                Your Profile
                                             </Link>
                                          )}
                                       </Menu.Item>
                                       {user?.user_type === 'admin' && <Menu.Item>
                                          {({active}) => (
                                             <Link
                                                href={`/${user.id}/`}
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                             >
                                                Dashboard
                                             </Link>
                                          )}
                                       </Menu.Item>}
                                       <Menu.Item>
                                          {({active}) => (
                                             <a
                                                href='/'
                                                onClick={handleSignOut}
                                                className={classNames(active ? 'bg-gray-100 cursor-pointer' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                             >
                                                Sign out
                                             </a>
                                          )}
                                       </Menu.Item>
                                    </Menu.Items>
                                 </Transition>
                              </Menu> :
                              <Link className='font-bold' href='/login'>Log in</Link>
                        }

                     </div>
                  </div>
               </div>

               {/*<Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                     {navigation.map((item) => (
                        <Disclosure.Button
                           key={item.name}
                           as="a"
                           href={item.href}
                           className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'block rounded-md px-3 py-2 text-base font-medium'
                           )}
                           aria-current={item.current ? 'page' : undefined}
                        >
                           {item.name}
                        </Disclosure.Button>
                     ))}
                  </div>
               </Disclosure.Panel>*/}
            </>
         )}
      </Disclosure>
   )
}
