import styles from "../styles/components-css/ProductCard.module.css"
import Image from "next/image"
import Link from "next/Link"

const ProductCard = ({product}) => {

    if(!product) {
        return null
    }
    
return (
    <Link href= {`/product/${product._id}`}>
        <div className= {styles.container} >
            <div className= {styles.img_container}>
                <Image src= "/produit.jpg" layout='fill' objectFit="cover"/>
            </div>
            <div className= {styles.description_container}>
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.brand}</p>
                    <p>{product.types.length} couleurs</p>
                </div>
                <div>
                    <p>{product.price} €</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard