
import './App.css'
import Destination from './components/Destination'

function App() {

  return (
    <>
    <Destination
      img="japan.png"
      country="Japan"
      link="https://maps.app.goo.gl/URBjqyWGfkabvpby5" 
      title="Mount Fuji"
      dates="12 Jan, 2021 - 24 Jan, 2021"
      description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    />
    <Destination
      img="australia.png"
      country="Australia" 
    />
    </>
  )
}

export default App
