import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="static/fonts/Microgramma-D-Extended-Bold.otf"
      as="font"
    />,
    <link
      rel="preload"
      href="static/fonts/AlegreyaSC-Italic.ttf"
      as="font"
    />,
    <link
      rel="preload"
      href="static/fonts/GildaDisplay-Regular.ttf"
      as="font"
    />,
    <link
      rel="preload"
      href="static/fonts/OpenSans-BoldItalic.ttf"
      as="font"
    />,
    <link
      rel="preload"
      href="static/fonts/OpenSans-Regular.ttf"
      as="font"
    />,
  ])
}