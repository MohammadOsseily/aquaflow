import create from 'zustand';
import axios from 'axios';

type UserType = {
    id: number;
    name: string;
    email: string;
    role: number;
    vendor: string | null;
};

type AuthState = {
    isLoged: boolean;
    user: UserType | null;
    setIsLoged: (isLoged: boolean) => void;
    setUser: (user: UserType) => void;
    initializeAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    isLoged: false,
    user: null,
    setIsLoged: (isLoged) => set({ isLoged }),
    setUser: (user) => set({ user }),
    initializeAuth: () => {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');
        if (token && user) {
            set({ isLoged: true, user: JSON.parse(user) });
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    },
}));
