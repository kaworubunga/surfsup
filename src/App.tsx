import website from './assets/website.png'
import { Footer } from './containers/footer'

function App() {
  return (
    <div>
      <img src={website} alt='Welcum to my website :)' />
      <Footer></Footer>
    </div>
  )
}

export default App
