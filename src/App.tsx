

import './App.css'

import HeaderSection from './components/HeaderSection'
import AboutUsSection from './components/AboutUsSection'
import CourseGrid from './components/CourseGrid'

import Footer from './components/Footer'

import TeamSection from './components/TeamSection'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-amber-500'>fsgsg</div> */}
      {/* <Header /> */}
      <HeaderSection />
      <AboutUsSection />
      <CourseGrid />
      {/* <Demo /> */}
      {/* <Teach /> */}
      <TeamSection/>
      <Footer/>
    
      
    </>
  )
}

export default App
