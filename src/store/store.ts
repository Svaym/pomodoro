import { create } from 'zustand';

interface MinuteState {
  minute: number;
}
type ActionMinute = {
  updateMinute: (minute: MinuteState['minute']) => void;
};
export const useMinuteStore = create<MinuteState & ActionMinute>((set) => ({
  minute: 0,
  updateMinute: (minute) => set(() => ({ minute })),
}));

interface SecondState {
  second: number;
}
type ActionSecond = {
  updateSecond: (second: SecondState['second']) => void;
};
export const useSecondStore = create<SecondState & ActionSecond>((set) => ({
  second: 0,
  updateSecond: (second) => set(() => ({ second })),
}));
