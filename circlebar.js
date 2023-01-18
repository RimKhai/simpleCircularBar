import React from 'react'

const Circlebar = ({size, progress, label, strokeWidth}) => {
    const baseInd = {
        cx: `${size/2}px`,
        cy: `${size/2}px`,
        r: `${size/2-strokeWidth}px`,
        fill: 'transparent',
        strokeWidth: `${strokeWidth}`,
    }
    const svgRed = {
        width: `${size}px`,
        height: `${size}px`,
    }
    const progressLen = ({size, progress}) => {
        const arcLength = (size/2)*2*3.14
        const arcOffset = arcLength*((100-progress)/100)
        return arcOffset
    }

    return (
        <>
            <svg style={svgRed} transform='rotate(-90)'>
                <circle style={baseInd}  stroke={'#ddd'}></circle>
                <circle style={baseInd}
                    stroke={'red'} 
                    strokeDasharray={`${(size/2)*3.14*2}`} 
                    strokeDashoffset={progressLen({size, progress})} 
                    strokeLinecap={'round'}></circle>
                <text x={(size/2)} y={(-size/2 + size/80)} fontSize={size/20} textAnchor='middle' transform='rotate(90)'>{label}</text>
            </svg> 
        </>
    )
}

export default Circlebar
