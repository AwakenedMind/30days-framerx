import * as React from "react"
import { Frame, Page, transform } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PageEffects(props) {
    const { text, tint, ...rest } = props
    const pages = ["One", "Two", "Three", "Four"]

    const style = {
        fontSize: 32,
        fontWeight: 800,
        color: "#05F"
    }

    return (
        <Page
            width={"100%"}
            height={"100%"}
            overflow={"visible"}
            gap={-50}
            effect={info => {
                const offset = info.normalizedOffset
                const opacity = transform(offset, [-1, 0, 1], [0, 1, 0])
                const scale = transform(offset, [-1, 0, 1], [0.5, 1, 0.5])

                return {
                    opacity, 
                    scale
                }
                console.log(offset)
            }}
        >
            {pages.map((title, index) => {
                return (
                    <Frame
                        size={"100%"}
                        background={"#fff"}
                        radius={30}
                        key={index}
                        style={style}
                    >
                    {title}
                    </Frame>
                )
            })}
        </Page>
    )
}
