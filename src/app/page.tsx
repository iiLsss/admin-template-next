import  Link  from 'next/link'

export default function Home() {
  return (
    <main className="">
      <Link href="/login" >Login</Link>
      <Link href="/home" >Home</Link>
    </main>
  )
}
