import styles from './layout.module.css'

import Link from 'next/link';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
     
      <body style={{ margin: 0 }}>
        <nav className={styles.dashboard}>
          <ul>
            <li>
              <Link href="/">Página Inicial</Link>
            </li>
            <li>
              <Link href="/timeRecord">Minhas Horas</Link>
            </li>
          </ul>
        </nav>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;






