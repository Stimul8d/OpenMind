import Header from './components/Header'
import QuoteContainer from './components/QuoteContainer'
import FloatingShapes from './components/FloatingShapes'

function App() {
  return (
    <div className="min-h-screen">
      <FloatingShapes />
      <Header />
      <QuoteContainer />
    </div>
  )
}

export default App