import {DragEvent} from "react";

type UseDragTrackerArgument = {
    positionConstant: number[],
    onChange: (n: number) => void
}


/**
 * Hooks use for track drag distance from beginning to end
 * @param {number[]} positionConstant - list number indicate position of slider bullet
 * @param {function(number)} onChange - callback function to emit event
 */
const useDragTracker = ({positionConstant, onChange}: UseDragTrackerArgument) => {


    const threshold = positionConstant.reduce((a, b, currentIndex) => {
        if (currentIndex === 5) {
            const prevItem = positionConstant[currentIndex - 1]
            return [
                ...a, {
                    min: (100 - prevItem) / 2 + prevItem,
                    max: 100
                }
            ]
        }
        const nextItem = positionConstant[currentIndex + 1]
        if (currentIndex === 0) {
            return [
                ...a, {
                    min: 0,
                    max: nextItem / 2
                }
            ]
        }
        const gap = (nextItem - b) / 2
        return [
            ...a, {
                min: b - gap,
                max: b + gap,
            }
        ]
    }, []);

    const getSliderPosition = (evt: MouseEvent | DragEvent) => {
        const el = evt.currentTarget as HTMLDivElement
        const percentageNumber = (evt.clientX / el.clientWidth) * 100
        if (percentageNumber >= threshold[0].min && percentageNumber <= threshold[0].max){
           onChange(1)
        }

        if (percentageNumber >= threshold[1].min && percentageNumber <= threshold[1].max){
           onChange(2)
        }

        if (percentageNumber >= threshold[2].min && percentageNumber <= threshold[2].max){
           onChange(3)
        }

        if (percentageNumber >= threshold[3].min && percentageNumber <= threshold[3].max){
           onChange(4)
        }

        if (percentageNumber >= threshold[4].min && percentageNumber <= threshold[4].max){
           onChange(5)
        }

        if (percentageNumber >= threshold[5].min && percentageNumber <= threshold[5].max){
           onChange(6)
        }
    }

    const onClick = (evt: MouseEvent) => {
        getSliderPosition(evt)
    }

    /**
     * Function to track start position from drag event
     * @param {DragEvent} evt
     */
    const onDragStart = (evt: DragEvent) => {
        getSliderPosition(evt)
    }

    /**
     * Function to calculate delta distance from start drag to current state
     * @param {DragEvent} evt
     */
    const onDrag = (evt: DragEvent) => {
        getSliderPosition(evt)
    }

    const onDragEnd = (evt: DragEvent) => {
        getSliderPosition(evt)
    }


    return {
        onClick,
        onDragStart,
        onDragEnd,
        onDrag
    }
}

export default useDragTracker
