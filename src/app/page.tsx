import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import LeftSidebarPage from "./components/LeftSidebar";
import RightContentAreaPage from "./components/RightContentArea";
import RightSidebarPage from "./components/RightSidebar";
import DirectorList from "./EmployeeList/DirectorList";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>


      <div className="min-h-screen flex flex-col md:flex-row required:xl">
        {/* ส่วนซ้าย */}
        <div className="w-full md:w-1/4 p-4">
          {/* <h2 className="text-xl font-bold">Left Sidebar</h2> */}
          {/* <p>This is the left sidebar.</p> */}
          <DirectorList />
          <LeftSidebarPage />
        </div>

        {/* ส่วนขวา */}
        <div className="w-full md:w-3/4 p-4">
          {/* <h2 className="text-xl font-bold">Right Content Area</h2> */}
          <RightContentAreaPage />

          {/* <p>This is the main content area on the right.</p> */}
        </div>

        <div className="w-full md:w-1/4 p-4">
          {/* <h2 className="text-xl font-bold">Left Sidebar</h2> */}
          {/* <p>This is the left sidebar.</p> */}

          <RightSidebarPage />
        </div>
      </div>


    </>
    
  );
}
