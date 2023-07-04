import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const secret = searchParams.get('secret')

  if (secret !== process.env.SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  try {
    revalidatePath('/blog/[slug]')
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
