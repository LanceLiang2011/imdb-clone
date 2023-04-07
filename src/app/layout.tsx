import Header from '@/components/Header';
import './globals.css';
import Providers from './Providers';

export const metadata = {
  title: 'IMDB Clone',
  description: 'A IMDB Clone for learning Next.js 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <>
            {/* Header */}
            <Header />
            {/* Navbar */}
            {/* SearchBox */}
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
