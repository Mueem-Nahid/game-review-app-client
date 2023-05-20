const Hero = () => {
   return (
      <section className="bg-white dark:bg-gray-900">
         <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto px-5 lg:px-0 pt-6 lg:pt-0 place-self-center lg:col-span-7">
               <h1
                  className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Unlock the World of Gaming with Game Insights
               </h1>
               <p className="max-w-2xl text-justify mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Discover
                  the ultimate destination for gaming enthusiasts, where data meets passion. Game Insights brings you
                  in-depth analysis, reviews, and the latest trends from the dynamic world of gaming. Whether you're a
                  hardcore gamer, industry professional, or simply curious about the gaming landscape, we've got you
                  covered.</p>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
               <img src="/hero-section.svg" alt="gaming"/>
            </div>
         </div>
      </section>
   );
};

export default Hero;