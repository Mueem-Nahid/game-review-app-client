"use client"

import {PhotoIcon} from '@heroicons/react/24/solid'
import {useRouter} from "next/navigation";
import {useState} from "react";

const AddGame = () => {
   const gameInfos = {
      title: '', summary: '', category: '', released_date: '',
   };

   const router = useRouter();
   const [gameObj, setGameObj] = useState(gameInfos);
   const [error, setError] = useState('');

   const handleInputChange = (e) => {
      const {name, value} = e.target;
      setGameObj({...gameObj, [name]: value});
   };

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(gameObj)
   };

   // -------------------------
   const [file, setFile] = useState('');
   const [message, setMessage] = useState('');
   const handleFile = (e) => {
      setMessage("");
      e.target.files[0] && setFile(URL.createObjectURL(e.target.files[0]));
   };

   return (<div className='p-4 sm:ml-64'>
      <h2 className="mx-3 md:mx-7 text-base font-semibold leading-7 text-gray-900">Add Game</h2>
      <form onSubmit={handleSubmit} method='POST'>
         <div className="space-y-12 mx-3 md:mx-7">
            <div className="border-b border-gray-900/10 pb-12">
               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                     <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                        Title
                     </label>
                     <div className="mt-2">
                        <div
                           className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                           <input
                              type="text"
                              name="title"
                              id="title"
                              autoComplete="title"
                              onChange={handleInputChange}
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                           />
                        </div>
                     </div>
                  </div>

                  <div className="col-span-full">
                     <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                        Summary
                     </label>
                     <div className="mt-2">
                <textarea
                   id="summary"
                   name="summary"
                   rows={3}
                   onChange={handleInputChange}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   defaultValue={''}
                />
                     </div>
                     <p className="mt-3 text-sm leading-6 text-gray-600">Write a summary about this game.</p>
                  </div>

                  {/*<div className="col-span-full">
                     <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Game photo
                     </label>
                     <div
                        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                           <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                           <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                 htmlFor="file-upload"
                                 className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                 <span>Upload a picture</span>
                                 <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                              </label>
                              <p className="pl-1">or drag and drop</p>
                           </div>
                           <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 2MB</p>
                        </div>
                     </div>
                  </div>*/}

                  {/* select image */}
                  <div className="col-span-full">
                     <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Game photo
                     </label>
                     <div className="rounded-lg bg-gray-50 ">
                        <div>
                           <span
                              className="flex justify-center items-center text-[12px] mb-1 text-red-500">{message}</span>
                           <div className="flex items-center justify-center w-full">
                              <label
                                 className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                                 <div className="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                                         viewBox="0 0 20 20"
                                         fill="currentColor">
                                       <path fillRule="evenodd"
                                             d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                             clipRule="evenodd"/>
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                       Select a photo</p>
                                 </div>
                                 <input type="file" onChange={handleFile} className="opacity-0"
                                        accept="image/jpeg, image/png, image/webp, image/gif"
                                        name="file"/>
                              </label>
                           </div>
                           {file && <div className="flex flex-wrap justify-center gap-2 mt-2">
                              <div className="overflow-hidden relative">
                                 <img className="h-32 w-32 rounded-md" src={file} alt=""/>
                              </div>
                           </div>}
                        </div>
                     </div>
                  </div>

               </div>
            </div>

            <div className="sm:col-span-3">
               <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
               </label>
               <div className="mt-2">
                  <input
                     type="text"
                     name="category"
                     id="category"
                     onChange={handleInputChange}
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
               </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                     <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Released date
                     </label>
                     <div className="mt-2">
                        <input
                           type="date"
                           name="released_date"
                           id="released_date"
                           onChange={handleInputChange}
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>
               </div>
            </div>

         </div>

         <div className="mt-6 mx-3 md:mx-7 flex items-center justify-start gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
               Cancel
            </button>
            <button
               type="submit"
               className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
               Save
            </button>
         </div>
      </form>
   </div>);
};

export default AddGame;