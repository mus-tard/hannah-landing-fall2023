import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Microgramma-D-Extended-Bold.otf"
      as="font"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/AlegreyaSC-Italic.ttf"
      as="font"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/GildaDisplay-Regular.ttf"
      as="font"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/OpenSans-BoldItalic.ttf"
      as="font"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/OpenSans-Regular.ttf"
      as="font"
      crossOrigin="anonymous"
    />,
  ])
}