import styles from "../styles/components-css/NewProducts.module.css"
import ProductCard from "./ProductCard"

const NewProducts = () => {
  return (
    <div className= {styles.container}>
        <h2>Nouveautés</h2>
        <div className= {styles.box}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default NewProducts