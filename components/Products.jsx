import styles from "../styles/components-css/Products.module.css"
import ProductCard from "./ProductCard"

const Products = ({products}) => {

  return (
    <div className= {styles.container}>
        {products.map(product => {
          return <ProductCard key= {product._id} product= {product}/>
        })}
    </div>
  )
}

export default Products