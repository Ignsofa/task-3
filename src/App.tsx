import Header from './components/Header.tsx'
import Promo from './components/Promo'  // Updated import
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="app">
            <Header />
            <Promo />
            <Gallery />
            <Footer />
        </div>
    )
}

export default App