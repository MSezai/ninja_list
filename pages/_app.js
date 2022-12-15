import Layout from '../components/Layout'
import '../styles/globals.css'                // global styles which are rendered below in <Component {...pageProps} />   

function MyApp({ Component, pageProps }) {         //  <Component {...pageProps} /> renders the pages
  return    (
    <Layout>
      <Component {...pageProps} />            
    </Layout>
  )                        
}

export default MyApp
