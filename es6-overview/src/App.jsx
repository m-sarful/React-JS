import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {

  // const watches = [
  //   {
  //     "id": 1,
  //     "brand": "Apple",
  //     "model": "Apple Watch Series 7",
  //     "price": 399,
  //     "color": "Space Gray",
  //     "features": ["Always-On Retina display", "Blood oxygen sensor", "ECG app"],
  //     "image": "https://example.com/apple_watch_series_7.jpg"
  //   },
  //   {
  //     "id": 2,
  //     "brand": "Samsung",
  //     "model": "Galaxy Watch 4",
  //     "price": 249,
  //     "color": "Phantom Black",
  //     "features": ["Advanced health monitoring", "Built-in GPS", "Military-grade durability"],
  //     "image": "https://example.com/galaxy_watch_4.jpg"
  //   },
  //   {
  //     "id": 3,
  //     "brand": "Fitbit",
  //     "model": "Fitbit Sense",
  //     "price": 299,
  //     "color": "Carbon/Graphite",
  //     "features": ["EDA sensor", "Built-in GPS", "6+ day battery life"],
  //     "image": "https://example.com/fitbit_sense.jpg"
  //   },
  //   {
  //     "id": 4,
  //     "brand": "Garmin",
  //     "model": "Garmin Forerunner 945",
  //     "price": 599,
  //     "color": "Black",
  //     "features": ["Running dynamics", "Advanced training features", "Music storage"],
  //     "image": "https://example.com/garmin_forerunner_945.jpg"
  //   },
  //   {
  //     "id": 5,
  //     "brand": "Huawei",
  //     "model": "Huawei Watch GT 3",
  //     "price": 329,
  //     "color": "Elegant Black",
  //     "features": ["AMOLED display", "2-week battery life", "TruSeen 5.0 heart rate monitoring"],
  //     "image": "https://example.com/huawei_watch_gt_3.jpg"
  //   }
  // ]
  
const [watches, setWatches] = useState([]);

  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(watch => setWatches(watch))
  },[])



  return (
    <>
      <h1>Vite + React</h1>
     {
      watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
     }
    </>
  )
}

export default App
