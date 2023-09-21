// src/pages/_app.tsx
import '../../styles/globals.css'; // Import the global CSS file
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
