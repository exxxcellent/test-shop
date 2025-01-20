// types
import { GoodStore } from '../shared/types/good-store.interface';
// zustand
import { create } from 'zustand';
// mocks
import { goods } from '../utils/mocks/goods';

export const useGoodStore = create<GoodStore>((set) => ({
    goods: [...goods],
    selectedGood: null,
    setSelectedGood: (good) => set({ selectedGood: good }),
}));
