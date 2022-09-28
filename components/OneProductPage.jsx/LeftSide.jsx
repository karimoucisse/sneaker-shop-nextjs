import styles from "../../styles/components-css/LeftSide.module.css"
import Image from "next/image"

const LeftSide = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.img_container}>
            <Image src= "/produit.jpg" layout='fill' objectFit="cover"/>
        </div>
    </div>
  )
}

export default LeftSide