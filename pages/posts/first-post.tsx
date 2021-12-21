import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
export default function FirstPost() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
