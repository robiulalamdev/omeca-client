import { useSelector } from "react-redux";

const FlowSidebar = () => {
  const { activeComponent } = useSelector((state) => state.global);
  return (
    <div className="w-[400px] bg-indigo-50 h-screen border-r-2 border-indigo-400">
      {activeComponent?.component && activeComponent?.component}
    </div>
  );
};

export default FlowSidebar;
