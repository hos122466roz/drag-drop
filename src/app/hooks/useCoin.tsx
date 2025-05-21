import { create } from "zustand";

interface useCoinProps {
  isAction: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useCoin = create<useCoinProps>((set) => ({
  isAction: false,
  onOpen: () => set({ isAction: true }),
  onClose: () => set({ isAction: false }),
}));
export default useCoin