import MenuList2Page from "./Menulist2";
import MenuList3Page from "./Menulist3";
import MenuListPage from "./Menulists";

export default function LeftSidebarPage() {
  return (
    <div>
      <br />
      <div className="border rounded-lg shadow-sm mb-4">
        <MenuListPage />
      </div>

      <div className="border rounded-lg shadow-sm mb-4">
        <MenuList2Page />
      </div>

      <div className="border rounded-lg shadow-sm mb-4">
       <MenuList3Page />
      </div>
    </div>
  );
}
