import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Nao. I'm a software engineer! You can connect me on <a href="https://twitter.com/NowNewNao" target="_blank">Twitter</a> !</p>
      </section>
    </Layout>
  )
}