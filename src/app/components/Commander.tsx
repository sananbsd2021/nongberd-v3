import Image from 'next/image'

export default function CommanderPage() {
    return (
        <div className="p-4">
        <div className="divide-y divide-gray-400">
            <div className='container'>
                <Image
                    src="/images/100.png" // รูปภาพในโฟลเดอร์ public
                    alt="Example Image"
                    width={300} // ความกว้างของรูปภาพ
                    height={200} // ความสูงของรูปภาพ
                    className="rounded-lg shadow-md"
                />
                <h4 className="text-center text-2xl text-blue-500">นายประเสริฐ กองสุข</h4>
                <p className="text-center text-blue-500">ผู้อำนวยการโรงเรียน</p>
            </div>
            </div>
        </div>
    )
}
