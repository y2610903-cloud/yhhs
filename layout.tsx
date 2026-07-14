import './globals.css';
export const metadata = { title: 'Steady Point', description: '학교 전용 공부 타이머 및 보상 플랫폼' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
