import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongoose'
import PageView from '@/app/models/PageView'; // โมเดลสำหรับเก็บข้อมูล Page Views

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { page } = await req.json();

    if (!page) {
      return NextResponse.json({ success: false, error: 'Page is required' }, { status: 400 });
    }

    // หาเอกสารสำหรับหน้าปัจจุบัน
    let pageView = await PageView.findOne({ page });

    if (!pageView) {
      // ถ้ายังไม่มีเอกสารสำหรับหน้าเว็บนี้ ให้สร้างใหม่
      pageView = await PageView.create({ page, views: 1 });
    } else {
      // เพิ่มจำนวนการเข้าชม
      pageView.views += 1;
      await pageView.save();
    }

    return NextResponse.json({ success: true, views: pageView.views }, { status: 200 });
  } catch (error) {
    console.error('Error updating page views:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
