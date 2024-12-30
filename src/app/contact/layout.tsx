import LeftSidebarPage from "../components/LeftSidebar";

export const metadata = {
  title: 'โรงเรียนบ้านหนองเบิด',
  description: 'โรงเรียนบ้านหนองเบิด ตำบลเมืองน้อย อำเภอธวัชบุรี จังหวัดร้อยเอ็ด',
  keywords: 'Nongberd School, โรงเรียนบ้านหนองเบิด, หนองเบิด',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col md:flex-row">
      {/* ส่วนซ้าย */}
      <div className="w-full md:w-1/4 text-white p-4">
        <LeftSidebarPage />
      </div>

      {/* ส่วนขวา */}
      <div className="w-full md:w-3/4 p-4">
        <main>{children}</main>
      </div>
    </div>
  );
}
