import styles from "../styles/components-css/Products.module.css"
import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"

const Products = ({products}) => {
  const filter = useSelector((state) => state.filter)
  return (
    <div className= {styles.container}>
        {products.map(product => {
          return <ProductCard key= {product._id} product= {product}/>
        })}
    </div>
  )
}

export default Products