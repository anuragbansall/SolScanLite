// import { MMKV } from "react-native-mmkv";

// // Create an MMKV instance
// export const storage = new MMKV();

// // Helper functions for typed storage
// export const mmkvStorage = {
//   getItem: (key) => {
//     const value = storage.getString(key);
//     return value ?? null;
//   },

//   setItem: (key, value) => {
//     storage.set(key, value);
//   },

//   removeItem: (key) => {
//     storage.delete(key);
//   },
// };

import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorageAdapter = {
  getItem: async (key) => {
    return AsyncStorage.getItem(key);
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, value);
  },
  removeItem: async (key) => {
    await AsyncStorage.removeItem(key);
  },
};
