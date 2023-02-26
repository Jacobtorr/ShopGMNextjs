import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

function Layout({children, title = '', description = ''}) {
  return (
    <>
        <Head>
            <title>{`ShopGM - ${title}`}</title>
            <meta name="description" content={description}/>
        </Head>

        <Header/>
        {children}
        <Footer/>
    </>
  )
}
export default Layout