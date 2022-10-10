import styles from "../styles/components-css/NewProducts.module.css"
import ProductCard from "./ProductCard"

const NewProducts = ({products}) => {
  return (
    <div className= {styles.container}>
        <h2>Nouveautés</h2>
        <div className= {styles.box}>
          {products?.map(product => {
            return <ProductCard key= {product._id} product= {product}/>
          })}
        </div>
    </div>
  )
}

export default NewProducts