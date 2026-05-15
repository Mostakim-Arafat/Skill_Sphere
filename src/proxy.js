
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from './lib/auth'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
        headers: await headers()
    })
  console.log(headers)
  if (session) {
    return NextResponse.next()
  }
  else {
    return NextResponse.redirect(new URL('/Page/Login', request.url))
  }
}

export const config = {
  matcher: ['/Page/Details/:id'],
}