import {createContext, useState} from 'react';

// Create a new context
export const UserContext = createContext();

// Create a provider component to wrap the components that need access to the context
export const UserProvider = ({children}) => {
   const [user, setUser] = useState(null);

   // Define any other functions or state variables you need in the context

   return (
      <UserContext.Provider value={{user, setUser}}>
         {children}
      </UserContext.Provider>
   );
};
