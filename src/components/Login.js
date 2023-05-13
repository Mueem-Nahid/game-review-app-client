"use client"

import Link from "next/link";
import {useState} from "react";
import {loginUser} from "@/apiServices/authentication";
import Error from "@/components/Error";
import { useRouter } from 'next/navigation';

const Login = () => {
   const loginInfos = {
      email: '',
      password: ''
   };

   const router =useRouter();
   const [login, setLogin] = useState(loginInfos);
   const [error, setError] = useState('');

   const handleLoginChange = (e) => {
      const {name, value} = e.target;
      setLogin({...login, [name]: value});
   };
   const handleLoginSubmit = async () => {
      try {
         const data = await loginUser(login);
         if(data.status === 200){
            return router.push('/');
         } else {
            setError(data.message)
         }
      } catch (error) {
         setError(error)
      }
   }

   return (
      <>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                  className="mx-auto h-32 w-auto"
                  src="/game-insights.jpg"
                  alt="Your Company"
               />
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
               </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form className="space-y-6" onSubmit={handleLoginSubmit} method="POST">
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           required
                           onChange={handleLoginChange}
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                           Password
                        </label>
                     </div>
                     <div className="mt-2">
                        <input
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           required
                           onChange={handleLoginChange}
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>
                  {
                     error && <Error error={error}/>
                  }
                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        Sign in
                     </button>
                  </div>
               </form>

               <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{' '}
                  <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                     Sign up
                  </Link>
               </p>
            </div>
         </div>
      </>
   );
};

export default Login;