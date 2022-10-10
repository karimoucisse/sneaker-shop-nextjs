import styles from "../styles/components-css/Products.module.css"
import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Products = ({products}) => {
  const filters = useSelector((state) => state.filter)
  const [filteredProducts, setFilteredProducts] = useState()
  const [sortProducts, setSortProducts] = useState()

  // filter useEffect
  useEffect(() => {
    // if the filters.filter is == "Toutes les chaussures", then print all products,
    // else print product that correspond to the filter
    if(!filters.filter || filters.filter === "Toutes les chaussures") {
      setFilteredProducts(
        products
      ) 
    } else {
      setFilteredProducts(
        products.filter((product) => 
          product.brand.includes(filters.filter)
        )
      ) 
    }
  },[products, filters])

  // sort useEffect
  useEffect(() => {
    if(filters.sort === "Les plus récents") {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (filters.sort === "Prix: croissant") {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [filters])

  return (
    <div className= {styles.container}>
      {filteredProducts?.map(product => {
          return <ProductCard key= {product._id} product= {product}/>
        })
      }
    </div>
  )
}

export default Products