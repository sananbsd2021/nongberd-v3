import MenuListPage from "../components/Menulists";

export const metadata = {
  title: 'โรงเรียนบ้านหนองเบิด',
  description: 'โรงเรียนบ้านหนองเบิด ตำบลเมืองน้อย อำเภอธวัชบุรี จังหวัดร้อยเอ็ด',
  keywords: 'Nongberd School, โรงเรียนบ้านหนองเบิด, หนองเบิด',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col md:flex-row">
      {/* ส่วนซ้าย */}
      <div className="w-full md:w-1/4 text-white p-4">
        {/* <h2 className="text-xl font-bold">Left Sidebar</h2> */}
        <p>This is the left sidebar.</p>
        {/* <LeftSidebarPage /> */}
        <MenuListPage />
        <br />


        <a
          href="/api/auth/signout"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ออกจากระบบ
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>

      </div>

      {/* ส่วนขวา */}
      <div className="w-full md:w-3/4 p-4">
        {/* <h2 className="text-xl font-bold">Right Content Area</h2> */}
        <main>{children}</main>
    {/*    <p>This is the main content area on the right.</p> */}
      </div>
    </div>
  );
}
