import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagePath = path.join(process.cwd(), 'public', 'marketingbg.jpg');
  
  try {
    // Check if file exists
    await fs.promises.access(imagePath, fs.constants.F_OK);
    
    // Get file stats
    const stats = await fs.promises.stat(imagePath);
    
    return NextResponse.json({
      exists: true,
      path: imagePath,
      size: stats.size,
      lastModified: stats.mtime,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({
      exists: false,
      path: imagePath,
      error: errorMessage,
    }, { status: 404 });
  }
}
