import { useEffect, useState } from "react";
import {auth} from '../config/firebaseConfig'


export async function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {

      if (auth) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
  }, []);

  return {
    user,
  };
}
