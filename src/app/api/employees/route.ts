import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongoose';
import Employee from '@/app/models/Employee';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // ตรวจสอบข้อมูล
    const { name, position, role, photo } = body;
    if (!name || !position || !role || !photo) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!['director', 'teacher', 'staff'].includes(role)) {
      return NextResponse.json(
        { success: false, error: 'Invalid role provided' },
        { status: 400 }
      );
    }

    // สร้างข้อมูลบุคลากรใหม่
    const newEmployee = new Employee({ name, position, role, photo });
    const savedEmployee = await newEmployee.save();

    return NextResponse.json({ success: true, data: savedEmployee }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating employee:', error.message);
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
    await Employee.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Employee deleted' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const role = url.searchParams.get('role'); // กรองตาม role

    const query = role ? { role } : {}; // ถ้ามี role ให้กรอง
    const employees = await Employee.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: employees });
  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
