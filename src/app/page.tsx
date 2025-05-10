import DragDropDesk from "./components/drag-drop-desk/drap-drop-desk";
import DragDropModile from "./components/drag-drop-mobile/DrapDropMobile";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Drop/> */}
      <DragDropDesk />
      {/* <DragDropModile/> */}
    </div>
  );
}
