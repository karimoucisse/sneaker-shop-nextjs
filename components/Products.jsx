import styles from "../styles/components-css/Products.module.css"
import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Products = ({products}) => {
  const filters = useSelector((state) => state.filter)
  const [filteredProducts, setFilteredProducts] = useState()
  const [sortProducts, setSortProducts] = useState()

  useEffect(() => {
    // if the filters.filter is == "Toutes les chaussures", then print all products,
    // else print product that correspond to the filter
      setFilteredProducts(
        filters.filter !== "Toutes les chaussures" ?
        products.filter((product) => 
          product.brand.includes(filters.filter)
        ) : products
      ) 

  },[])

  return (
    <div className= {styles.container}>
        {filteredProducts?.map(product => {
          return <ProductCard key= {product._id} product= {product}/>
        })}
    </div>
  )
}

export default Products