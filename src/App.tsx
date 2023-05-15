import styles from './style'

import {Navbar,Hero, Register, About, Clients, Guide, Feedback, Popular, Footer} from './components'

const App = () => {
  return (
    <div  className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      <div className={`bg-primary${styles.paddingX} ${styles.flexStart} mt-24`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Register />
          <About />
          <Clients />
          <Guide />
          <Feedback />
          <Popular />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App