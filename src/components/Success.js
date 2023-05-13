const Success = ({message}) => {
   return (
      <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
         <p className="text-sm">{message}</p>
      </div>
   );
};

export default Success;