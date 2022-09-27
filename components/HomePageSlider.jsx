import styles from "../styles/Slider.module.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image"
import { useState } from "react";

const Slider = () => {
    const [index, setIndex] = useState(0)
    const images = ["/sneakers1.jpg", "/sneakers2.jpg" ]

    const handleArrowClick = (direction) => {
      if(direction === "left") {
        setIndex(index !== 0 ? index-1 : 1)
      } else {
        setIndex(index !== 1 ? index+1 : 0)
      }
    }
  return (
    <div className= {styles.container}>
        <div className= {styles.arrow_container} onClick= {() => handleArrowClick("left")}>
          <ArrowBackIosIcon/>
        </div>
      <div className= {styles.wrapper} style= {{ transform: `translateX(${-100 * index}vw)` }}>
            {images.map((image, index) => {
               return <div className= {styles.img_Container} key= {index}>
                 <Image src= {image} layout='fill' objectFit="cover"/>
                </div>
            })}    
      </div>
      <div className= {styles.arrow_container} onClick= {() => handleArrowClick("right")}>
        <ArrowForwardIosIcon/>
      </div>
    </div>
  )
}

export default Slider