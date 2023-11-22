import { withAuth } from 'next-auth/middleware';

export default withAuth(() => {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith('/admin') && token === null) {
        return false;
      }

      return true;
    },
  },
});

export const config = { matcher: ['/admin'] };
