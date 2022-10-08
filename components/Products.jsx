import styles from "../styles/components-css/Products.module.css"
import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Products = ({products}) => {
  const filters = useSelector((state) => state.filter)
  const [filteredProducts, setFilteredProducts] = useState()

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => 
        product.brand.includes(filters.filter)
      )
    ) 
  },[filters, products])

  if(!filteredProducts) {
    return null
  }

  return (
    <div className= {styles.container}>
        {filteredProducts.map(product => {
          console.log(product);
          return <ProductCard key= {product._id} product= {product}/>
        })}
    </div>
  )
}

export default Products