import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'On The Fly Waste Solutions | Professional Valet Trash Services Orlando FL',
  description: 'Professional valet trash, bulk removal, and pressure washing services for Central Florida communities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
