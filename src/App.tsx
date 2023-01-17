import './App.css'
import Slider from "./components/Slider";
import {useState} from "react";

function App() {
    const [sliderPos, setSliderPos] = useState(2)
    const handleSlideChange = (e) => {
        setSliderPos(e)
    }
    return (
        <div className="App">
            <div className="p-4">
                <Slider position={sliderPos} onChange={handleSlideChange}/>
            </div>
        </div>
    )
}

export default App
