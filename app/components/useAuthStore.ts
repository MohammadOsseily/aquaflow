// useAuthStore.ts
import { create } from 'zustand';
interface AuthState {
    isLoged: boolean;
    setIsLoged: (isLoged: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoged: false,
    setIsLoged: (isLoged) => set({ isLoged }),
}));
