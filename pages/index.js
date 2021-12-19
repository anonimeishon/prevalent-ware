import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I like cinnamon bread</p>
      </section>
      <section className="text-blue-600 text-xl">
        <Link href="/cardsPage">
          <a>cardsPage</a>
        </Link>
      </section>
    </Layout>
  );
}
