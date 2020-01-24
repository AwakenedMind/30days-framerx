import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function ProgressBar(props) {
    const { progress, duration } = props
    return (
        <Frame
            height={44}
            width="100%"
            center
            borderRadius={22}
            backgroundColor="#dedede"
            overflow="hidden"
            border="4px solid #dedede"
        >
            <Frame
                height="100%"
                background="0099FF"
                initial={{ width: "100%" }}
                animate={{ width: progress + "%" }}
                transition={{ ease: "linear", duration }}
            />
        </Frame>
    )
}

ProgressBar.defaultProps = {
    progress: 100,
    duration: 2,
}

addPropertyControls(ProgressBar, {
    progress: {
        title: "Progress",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 5,
        defaultValue: 0,
    },
    duration: {
        title: "Duration",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 0.5,
        defaultValue: 2.5,
    },
})
