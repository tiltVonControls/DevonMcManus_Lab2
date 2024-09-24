import Card from './Components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='title'>Resort lite</h1>
      <br/>
      <div className='list'>
      <Card
        name = "Indonesia"
        image = "src/assets/1.jpg"
        price = "589"
        rate = "4.8"
        hotel = "Gili Air Hotel"
      />  
      <Card
        name = "Seychelles"
        image = "src/assets/2.jpg"
        price = "629"
        rate = "4.2"
        hotel = "hilton Resort"
      /> 
      <Card
        name = "US Virgin Islands"
        image = "src/assets/3.jpg"
        price = "485"
        rate = "3.5"
        hotel = "hilton Resort"
      />
      <Card
        name = "Bahamas"
        image = "src/assets/4.jpg"
        price = "729"
        rate = "4.1"
        hotel = "Kuredu Resort"
      />
      <Card
        name = "Mauritius"
        image = "src/assets/5.jpg"
        price = "877"
        rate = "4.9"
        hotel = "Trou D'eau Douce"
      />
      <Card
        name = "Bahamas"
        image = "src/assets/6.jpg"
        price = "365"
        rate = "3.2"
        hotel = "Staniel Cay Hotel"
      />   
      </div>            
    </>
  )
}

export default App
