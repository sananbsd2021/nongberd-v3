import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongoose';
import {GalleryModel} from '@/app/models/Gallery';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newNew = new GalleryModel(body);
    const savedNew = await newNew.save();
    return NextResponse.json({ success: true, data: savedNew }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const news = await GalleryModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: news }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}


// Update a gallery item by ID
export async function PUT(request: Request) {
  try {
    await connectToDatabase();
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    }

    const updatedItem = await GalleryModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedItem) {
      return NextResponse.json({ success: false, error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedItem }, { status: 200 });
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = params;

    const deletedGallery = await GalleryModel.findByIdAndDelete(id);
    if (!deletedGallery) {
      return NextResponse.json({ success: false, error: "Gallery not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Gallery deleted successfully" });
  } catch (error) {
    console.error("Error deleting gallery:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}