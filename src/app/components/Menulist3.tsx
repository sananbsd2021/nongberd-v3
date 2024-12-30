import Link from "next/link";
import Image from "next/image";


interface MenuItemProps {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const menuItems: MenuItemProps[] = [
  { title: "คณิตศาสตร์", href: "/math", imgSrc: "/images/0.gif", imgAlt: "Math" },
  { title: "วิทยาศาสตร์และเทคโนโลยี", href: "/science", imgSrc: "/images/0.gif", imgAlt: "Science and Technology" },
  { title: "ภาษาไทย", href: "/thai", imgSrc: "/images/0.gif", imgAlt: "Thai Language" },
  { title: "สังคมศึกษา", href: "/social-studies", imgSrc: "/images/0.gif", imgAlt: "Social Studies" },
  { title: "สุขศึกษา", href: "/health-education", imgSrc: "/images/0.gif", imgAlt: "Health Education" },
  { title: "ภาษาต่างประเทศ", href: "/foreign-languages", imgSrc: "/images/0.gif", imgAlt: "Foreign Languages" },
];

const MenuItem = ({ title, href, imgSrc, imgAlt }: MenuItemProps) => (
  <div className="flex items-center py-2">
    <Image
      src={imgSrc}
      alt={imgAlt}
      className="max-w-xs transition duration-300 ease-in-out hover:scale-110 py-1.5"
    />
    <Link href={href} className="mx-2 p-1 text-blue-500 hover:underline">
      {title}
    </Link>
  </div>
);

export default function MenuList3Page() {
  return (
    <div className="p-4">
      <div className="divide-y divide-gray-400">
        <div className="bg-blue-600 p-2 rounded-sm">
          <a href="#" className="font-bold text-white">
            เว็บไซต์กลุ่มสาระการเรียนรู้
          </a>
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
