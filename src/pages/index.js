import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  const formats = ["jpg"]
  const placeholder = "none"
  const breakpoints = [600, 900, 1200]
  const layout = "fullWidth"
  const aspectRatio = 2
  const transformOptions = { fit: "contain" }

  return (
    <>
      {/*
        Landscape/horizontal image

        Expected sizes:
          - 1200x600
          -  900x450
          -  600x300

        Actual sizes:
          - 1000x500
          -  900x450
          -  600x300
      */}
      <StaticImage
        src="https://i.picsum.photos/id/1052/1000/800.jpg?hmac=H-xom7ATuPzsPahXd0rp-de_3zS3Z6fpVwUe4MAPWdQ"
        alt=""
        formats={formats}
        placeholder={placeholder}
        breakpoints={breakpoints}
        layout={layout}
        aspectRatio={aspectRatio}
        transformOptions={transformOptions}
      />

      {/*
        Portrait/vertical image

        Expected sizes:
          - 1200x600
          -  900x450
          -  600x300

        Actual sizes:
          -  800x400
          -  600x300
      */}
      <StaticImage
        src="https://i.picsum.photos/id/905/800/1000.jpg?hmac=pSmexHCysmJGlfBvh7PxbuYnrS6p0iZyjMGpfTcY7aA"
        alt=""
        formats={formats}
        placeholder={placeholder}
        breakpoints={breakpoints}
        layout={layout}
        aspectRatio={aspectRatio}
        transformOptions={transformOptions}
      />
    </>
  )
}
