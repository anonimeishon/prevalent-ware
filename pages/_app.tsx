import "../styles/globals.css";
import Layout from "../components/layout/layout";
import SearchContextProvider from "../context/searchContext";
import { useRouter } from "next/router";
import PopupContextProvider from "../context/popupContext";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const route = router.pathname;
  return (
    <>
      <SearchContextProvider>
        <Layout>
          <Component {...pageProps} route={route} />
        </Layout>
      </SearchContextProvider>
    </>
  );
}

export default MyApp;
