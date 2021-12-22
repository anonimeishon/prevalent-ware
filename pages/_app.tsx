import "../styles/globals.css";
import Layout from "../components/layout/layout";
import SearchContextProvider from "../context/searchContext";
import { useRouter } from "next/router";
import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const route = router.pathname;
  console.log(
    "🚀 ~ file: _app.tsx ~ line 17 ~ MyApp ~           process.env.NODE_ENV",
    process.env.NODE_ENV
  );
  console.log(
    "🚀 ~ file: _app.tsx ~ line 17 ~ MyApp ~           URL",
    process.env.NODE_ENV === "production"
      ? "https://prevalent-ware-nu.vercel.app/api/graphql"
      : "http://localhost:3000/api/graphql"
  );
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      new HttpLink({
        uri:
          process.env.NODE_ENV === "production"
            ? "https://prevalent-ware-nu.vercel.app/api/graphql"
            : "http://localhost:3000/api/graphql",
      }),
    ]),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <SearchContextProvider>
          <Layout>
            <Component {...pageProps} route={route} />
          </Layout>
        </SearchContextProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
