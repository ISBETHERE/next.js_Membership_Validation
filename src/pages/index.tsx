// pages/index.tsx
import Link from 'next/link'

function Home() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/signup">signup</Link>
            </li>
            <li>
                <Link href="/blog/hello-world">Blog Post</Link>
            </li>
        </ul>
    )
}

export default Home;
