import { create } from "zustand";

interface DragDropProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useDrapDrop = create<DragDropProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
export default useDrapDrop;
