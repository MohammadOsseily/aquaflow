import { create } from 'zustand';

interface User {
    id: number;
    name: string;
    email: string;
    role: number;
    vendor?: string;
}

interface AuthState {
    isLoged: boolean;
    user?: User;
    setIsLoged: (isLoged: boolean) => void;
    setUser: (user: User) => void;
    loadUserFromStorage: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoged: false,
    user: undefined,
    setIsLoged: (isLoged) => set({ isLoged }),
    setUser: (user) => set({ user }),
    loadUserFromStorage: () => {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');
        if (token && user) {
            set({ isLoged: true, user: JSON.parse(user) });
        }
    },
}));

// Load user info from localStorage when the app starts
// useEffect(() => {
//     useAuthStore.getState().loadUserFromStorage();
// }, []);
