import Link from 'next/link'

function Home() {
    return (
        <ul>

            <li>
                <Link href="/signup">회원가입 페이지 이동</Link>
            </li>
        </ul>
    )
}

export default Home