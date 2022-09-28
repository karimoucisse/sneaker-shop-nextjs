import styles from "../styles/ProductCard.module.css"
import Image from "next/image"
const ProductCard = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.img_container}>
            <Image src= "/produit.jpg" layout='fill' objectFit="cover"/>
        </div>
        <div className= {styles.description_container}>
            <div>
                <h3>Air max 97</h3>
                <p>Nike</p>
                <p>3 couleurs</p>
            </div>
            <div>
                <p>197 €</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard