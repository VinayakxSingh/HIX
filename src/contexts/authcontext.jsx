import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { useContext, createContext, useState, useEffect } from "react";
import { auth, database } from "../firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const usernameRef = ref(database, `users/${currentUser.uid}/username`);
        const snapshot = await get(usernameRef);
        if (snapshot.exists()) {
          setUsername(snapshot.val());
        } else {
          // fallback to displayName if no username in DB
          setUsername(currentUser.displayName || "User");
        }
      } else {
        setUsername("");
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const register = async (email, password, username) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await set(ref(database, "users/" + user.uid), { username });
  };

  const googleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Save the displayName as username if not already in DB
    const usernameRef = ref(database, `users/${user.uid}/username`);
    const snapshot = await get(usernameRef);
    if (!snapshot.exists()) {
      await set(usernameRef, user.displayName || "Google User");
    }
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, googleSignIn, username }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
