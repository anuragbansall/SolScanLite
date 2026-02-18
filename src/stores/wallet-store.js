import { create } from "zustand";

export const useWalletStore = create((set, get) => ({
  // Initial state
  favorites: [],
  searchHistory: [],
  isDevnet: false,

  // Actions — these modify the state
  addFavorite: (address) =>
    set((state) => ({
      favorites: state.favorites.includes(address)
        ? state.favorites // already exists, don't duplicate
        : [address, ...state.favorites],
    })),

  removeFavorite: (address) =>
    set((state) => ({
      favorites: state.favorites.filter((a) => a !== address),
    })),

  isFavorite: (address) => get().favorites.includes(address),

  addToHistory: (address) =>
    set((state) => ({
      searchHistory: [
        address,
        // Remove duplicates — put the latest search first
        ...state.searchHistory.filter((a) => a !== address),
      ].slice(0, 20), // Keep only last 20
    })),

  clearHistory: () => set({ searchHistory: [] }),

  toggleNetwork: () => set((state) => ({ isDevnet: !state.isDevnet })),
}));
