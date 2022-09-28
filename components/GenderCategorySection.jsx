import styles from "../styles/components-css/GenderCategory.module.css"
import Image from "next/image"

const GenderCategory = () => {

  const PrintImgContainer = (src, title) => {
    return (
      <div className= {styles.img_container}>
        <div className= {styles.blank_shadow_container}></div>
        <Image src= {src} layout="fill" objectFit="cover"/>
        <div className= {styles.btn_container}>
          <p> {title} </p>
          <button>Acheter</button>
        </div>
      </div>
    )
  }

  return (
    <div className= {styles.container}>
      <h2>Des chaussures adapté à vos besoins</h2>
      <div className= {styles.box}>
        {PrintImgContainer("/child-sneaker.jpg", "Chaussure pour enfant")}
        <div className= {styles.adult_container}>
          {PrintImgContainer("/man-sneaker.jpg", "Nouveautès pour homme")}
          {PrintImgContainer("/woman-sneaker.jpg", "Nouveautès pour femme")}
        </div>
      </div>
    </div>
  )
}

export default GenderCategory