import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>      
      <div>
        <h2>Welcome Next.JS</h2>
      </div>
      <hr />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
