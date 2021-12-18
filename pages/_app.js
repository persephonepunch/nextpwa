import { useEffect } from 'react'
import Head from "next/head"
import Script from 'next/script'
import { useRouter } from 'next/router'
import '../styles/polymorph.css'

function routeChangeStartHandler(){
  // Close nav buttons
  const els = document.querySelectorAll(`.w-nav-button.w--open`)
  for(let el of els){
    el.click()
  }
}
function routeChangeHandler(){
  if(window.Webflow){
    window.Webflow.ready()
  }
}

function App(props) {
  const { Component, pageProps } = props
  const router = useRouter()

  useEffect(() => {

    router.events.on('routeChangeStart', routeChangeStartHandler)
    router.events.on('routeChangeComplete', routeChangeHandler)
    router.events.on('routeChangeError', routeChangeHandler)

    return () => {
      router.events.off('routeChangeStart', routeChangeStartHandler)
      router.events.off('routeChangeComplete', routeChangeHandler)
      router.events.off('routeChangeError', routeChangeHandler)
  };
  }, [])


  return <>
    <Head>
      <link href="/polymorph/icons/favicon.png" rel="shortcut icon" type="image/x-icon" />
      <link href="/polymorph/icons/webclip.png" rel="apple-touch-icon" />
      <meta name="description" content="Polymorph is a CLI tool for converting Webflow projects to UI libraries for various frameworks including React, Svelte, Vue.js, Shopify Liquid, Angular, SolidJS, Web Components, and JavaScript." />
    </Head>

    <Component {...pageProps} />
    <Script src='/polymorph/scripts.js' />
  </>
}

export default App
