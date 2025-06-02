// import React, { useEffect, useRef } from 'react'
// import Hero from './Pages/Hero'
// import About from './Pages/About'
// import Features from './Pages/Features'
// import DownloadApp from './Pages/DownloadApp'
// import Location from './Pages/Location'
// import Footer from './Pages/Footer'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { ScrollSmoother } from 'gsap/ScrollSmoother'
// import { useLocation } from 'react-router-dom'  // 👈 NEW

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// const App = () => {
//   const smoother = useRef()
//   const location = useLocation() // 👈 detect route changes

//   useEffect(() => {
//     // Kill old smoother if exists
//     if (smoother.current) {
//       smoother.current.kill()
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()) // 👈 optional but safer
//     }

//     // Recreate smoother
//     const timer = setTimeout(() => {
//       smoother.current = ScrollSmoother.create({
//         wrapper: '#smooth-wrapper',
//         content: '#smooth-content',
//         smooth: 1.2,
//         effects: true,
//         normalizeScroll: true
//       })
//     }, 0)

//     return () => {
//       clearTimeout(timer)
//     }
//   }, [location.pathname])  // 👈 Re-run on route change

//   return (
//     <div id="smooth-wrapper" className="">
//       <div id="smooth-content">
//         <Hero />
//         <About />
//         <Features />
//         <DownloadApp />
//         <Location />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App