import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  const goToDetailPage = () => {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social'
      }
    }) 
  }

  return (
    <>
      <Head>
        <title>Luong Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1><Link href="/about">About us</Link></h1>

      <button onClick={goToDetailPage}>Go to detail-page</button>
      </main>
    </>
  )
}
