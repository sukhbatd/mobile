import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    userName: string;
    password: string
}
interface AuthState {
    user:User| null;
    setUser: (user: User | null) => void;
    clearUser: () => void;
  }
  
  const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }));
  
  export default useAuthStore;