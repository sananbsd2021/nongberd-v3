import Link from "next/link";
// import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";

interface MenuItemProps {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const menuItems: MenuItemProps[] = [
  { title: "ข้อมูลพื้นฐานโรงเรียน", href: "/info", imgSrc: "/images/0.gif", imgAlt: "School Information" },
  { title: "ประวัติหน่วยงาน", href: "/history", imgSrc: "/images/0.gif", imgAlt: "Organization History" },
  { title: "วิสัยทัศน์ / ปรัชญา", href: "/vision", imgSrc: "/images/0.gif", imgAlt: "Vision and Philosophy" },
  { title: "คณะกรรมการสถานศึกษา", href: "/kk_sch", imgSrc: "/images/0.gif", imgAlt: "School Board" },
  { title: "e-service", href: "/eservice", imgSrc: "/images/0.gif", imgAlt: "e-Service" },
  { title: "ผู้ดูแลระบบ", href: "/dashboard", imgSrc: "/images/0.gif", imgAlt: "Admin Dashboard" },
];

const MenuItem = ({ title, href, imgSrc, imgAlt }: MenuItemProps) => (
  <div className="flex items-center py-2">
    <div>
      <AiFillCaretRight className="text-blue-500" />
      {/* <Image
        src={imgSrc}
        alt={imgAlt}
        className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
      /> */}
    </div>
    <div>
      <Link href={href} className="mx-2 p-1 text-blue-500 hover:underline">
        {title}
      </Link>
    </div>
  </div>
);

export default function MenuListPage() {
  return (
    <div className="p-4">
      <div className="divide-y divide-gray-400">
        <div className="bg-blue-600 p-2 rounded-sm">
          <h1 className="font-bold text-white">ข้อมูลพื้นฐาน</h1>
        </div>
        <div className="grid grid-cols-1 divide-y gap-2 pt-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              href={item.href}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
