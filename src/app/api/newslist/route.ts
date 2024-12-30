import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongoose';
import Newslist from '@/app/models/Newslist';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // ตรวจสอบข้อมูล
    const { title, description, role, photo } = body;
    if (!title || !description || !role || !photo) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!['news', 'newslist', 'staff'].includes(role)) {
      return NextResponse.json(
        { success: false, error: 'Invalid role provided' },
        { status: 400 }
      );
    }

    // สร้างข้อมูลใหม่
    const newNewslist = new Newslist({ title, description, role, photo });
    const savedNewslist = await newNewslist.save();

    return NextResponse.json({ success: true, data: savedNewslist }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating newslist:', error.message);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}



export async function DELETE(request: Request) {
  try {
    await connectToDatabase();
    const { id } = await request.json();
    await Newslist.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Newslist deleted' });
  } catch (error) {
    console.error('Error deleting newslist:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const role = url.searchParams.get('role'); // กรองตาม role

    const query = role ? { role } : {}; // ถ้ามี role ให้กรอง
    const newslists = await Newslist.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: newslists });
  } catch (error) {
    console.error('Error fetching newslists:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
