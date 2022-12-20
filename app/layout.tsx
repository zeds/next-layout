import '../styles/globals.css';
import Header from './header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-900 text-gray-100 antialiased">
      <head />
      <body>
        <Header />
					<div className="p-4">
						{children}
					</div>
      </body>
    </html>
  );
}