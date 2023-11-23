import { AccessDeniedError } from '@/errors';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const URL = process.env.API_URL;

if (!URL) throw new Error('NEXT_PUBLIC_API_URL is not defined');

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credenciais',
      type: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials)
            throw new AccessDeniedError('Acesso negado, credenciais invalidas');

          // send credentials using form encoded

          const formData = {
            username: credentials.username,
            password: credentials.password,
            grant_type: 'password',
          } as Record<string, string>;

          const formBody = Object.keys(formData)
            .map(
              (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(
                  formData[key]
                )}`
            )
            .join('&');

          const response = await fetch(`${URL}/token`, {
            method: 'POST',
            body: formBody,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          });

          const data = await response.json();

          if (response.ok && data) {
            return data;
          }
        } catch (error) {
          console.log('error', error);
          throw new AccessDeniedError('Acesso negado, credenciais invalidas');
        }
        throw new AccessDeniedError('Acesso negado, credenciais invalidas');
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signOut: '/',
  },
  theme: {
    brandColor: '#fafafa',
    colorScheme: 'light',
    disableDarkMode: true,
    buttonText: 'Iniciar sessão',
  },
} as AuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
