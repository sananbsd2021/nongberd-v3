import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const menuItems: MenuItem[] = [
  { title: "ข้อมูลนักเรียน", href: "/students", imgSrc: "/images/0.gif", imgAlt: "Student information" },
  { title: "ข้อมูลบุคลากร", href: "/staff", imgSrc: "/images/0.gif", imgAlt: "Staff information" },
  { title: "ข้อมูลที่ดิน สิ่งปลูกสร้าง", href: "/properties", imgSrc: "/images/0.gif", imgAlt: "Properties information" },
  { title: "ข้อมูลครุภัณฑ์", href: "/assets", imgSrc: "/images/0.gif", imgAlt: "Assets information" },
];

const MenuItem = ({ item }: { item: MenuItem }) => (
  <div className="flex items-center py-2">
    <Image
      src={item.imgSrc}
      alt={item.imgAlt}
      className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
    />
    <Link href={item.href} className="mx-2 p-1 text-blue-500 hover:underline">
      {item.title}
    </Link>
  </div>
);

export default function MenuList2Page() {
  return (
    <div className="p-4">
      <div className="divide-y divide-gray-400">
        <div className="bg-blue-600 p-2 rounded-sm">
          <a href="#" className="font-bold text-white">
            ข้อมูลสารสนเทศ
          </a>
        </div>
        <div className="grid grid-cols-1 divide-y gap-2 pt-2">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
