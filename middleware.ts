import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // const cookieStore = cookies();
    // const user = JSON.parse(cookieStore.get('user')?.value ?? '');

    // if (request.nextUrl.pathname.startsWith('/vendor')) {
    //     if (user.role != 1) {
    //         return NextResponse.rewrite(new URL('/', request.url));
    //     }
    // }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/dashboard/user', request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/vendor/1', '/vendor/2', '/vendor/3', '/vendor/4', '/account'],
};
