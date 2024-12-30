import Image from "next/image";

export default function LinkListPage() {
  return (
    <div className="mb-4 rounded-lg border shadow-sm">

      <div className="mx-auto gap-y-1 p-0.5">
        <a
          href="https://www.moe.go.th/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/001/04-moe.gif" // รูปภาพในโฟลเดอร์ public
            alt="Example Image"
            width={300} // ความกว้างของรูปภาพ
            height={200} // ความสูงของรูปภาพ
            className="rounded-lg shadow-md"
          />
        </a>
      </div>

      <div className="mx-auto gap-y-1 p-0.5">
        <a
          href="https://www.dltv.ac.th/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/001/17-dltv.jpg" // รูปภาพในโฟลเดอร์ public
            alt="Example Image"
            width={300} // ความกว้างของรูปภาพ
            height={200} // ความสูงของรูปภาพ
            className="rounded-lg shadow-md"
          />
        </a>
        </div>

        <div className="mx-auto gap-y-1 p-0.5">
          <a
            href="https://opec.go.th/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/001/02-opec.gif" // รูปภาพในโฟลเดอร์ public
              alt="Example Image"
              width={300} // ความกว้างของรูปภาพ
              height={200} // ความสูงของรูปภาพ
              className="rounded-lg shadow-md"
            />
          </a>
      </div>
      
      <div className="mx-auto gap-y-1 p-0.5">
        <a
          href="https://www.onesqa.or.th/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/001/03-onesqa.gif" // รูปภาพในโฟลเดอร์ public
            alt="Example Image"
            width={300} // ความกว้างของรูปภาพ
            height={200} // ความสูงของรูปภาพ
            className="rounded-lg shadow-md"
          />
        </a>
      </div>
    </div>
  );
}
