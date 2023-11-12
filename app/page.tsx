import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main> <h1> Next.js React </h1>
    <br />
    <Link href="/trade">trade</Link>
    <br />
    <Link href="/corr">diversify</Link>
    </main>
  )
}
