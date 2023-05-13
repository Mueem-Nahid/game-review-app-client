const Error = ({error}) => {
   return (
      <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3">
         <p className="text-sm">{error}</p>
      </div>
   );
};

export default Error;