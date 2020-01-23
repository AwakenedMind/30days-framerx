import * as React from "react"
import { Frame } from "framer"

export function ProgressBar() {
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
            <Frame height="100%" background="0099FF" />
        </Frame>
    )
}
