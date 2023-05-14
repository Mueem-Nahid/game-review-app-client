import {createContext, useState} from 'react';

// Create a new context
export const UserContext = createContext();

export const UserProvider = ({children}) => {
   const [user, setUser] = useState(null);

   return (
      <UserContext.Provider value={{user, setUser}}>
         {children}
      </UserContext.Provider>
   );
};
