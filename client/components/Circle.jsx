import React from 'react'

import { getColor } from '../color'

export default class Circle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            circles: []
          }
    }

    handleMouseOver = () => {
        const circles = []
        const { cx, cy, r } = this.props.circle

        circles.push(
            { cx: cx, cy: cy - r, r: r / 2 },
            { cx: cx, cy: cy + r, r: r / 2 },
            { cx: cx + r, cy: cy, r: r / 2},
            { cx: cx - r, cy: cy, r: r / 2}
        )

        this.setState({ circles })
    }

    render() {
        const { cx, cy, r } = this.props.circle
        const randomNumber = Math.floor(Math.random() * 10000)
        const color = getColor(randomNumber)
        
        return (
            <g>
            <circle cx={cx} cy={cy} r={r} fill={color} onMouseOver={this.handleMouseOver} />
            {this.state.circles.map((circle, key) => <Circle key={key} circle={circle} />)}
            </g>
        )
    }
}