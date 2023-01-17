import {FC, useRef} from "react";
import useDragTracker from "../hooks/useDragTracker";


type SliderProp = {

    /**
     * Value between 1 and 6
     */
    position: number,
    onChange: (n: number) => void
}

// this constant for bullet position
const PC: number[] = [0, 17, 33.5, 50.5, 67.5, 100]

/**
 * Step Slider
 *
 * @param {number} position - Variable used for define bullet position base on order
 * @param {function(number):void} onChange - Callback used to give changed value from slide
 */
const Slider: FC<SliderProp> = ({position, onChange}) => {
    // Giving error if number not in our schema
    if (![1, 2, 3, 4, 5, 6].includes(position)) {
        console.error("Position should be between 1 to 6")
        return null
    }


    const dragTracker = useDragTracker({
        onChange,
        positionConstant: PC
    })
    return <div  {...dragTracker} className="slider-container">
        <div className="slider-bar">
            <div style={{width: `${PC[position - 1]}%`}} className="active-bar"/>
            <svg
                style={{left: `${PC[position - 1]}%`}}
                className="active-bullet"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    r="10"
                    transform="matrix(-1 0 0 1 13 13)"
                    fill="#1B1B1B" stroke="#FFD05D" strokeWidth="6"
                />
            </svg>
            <div className="slider-number">
                <div>3</div>
                <div>6</div>
                <div>9</div>
                <div>12</div>
                <div>15</div>
                <div>50</div>
            </div>
        </div>
    </div>
}

export default Slider
