import FilterContainer from "../components/FilterContainer"
import Products from "../components/Products"
import styles from "../styles/pages-css/ProductsList.module.css"

const ProductsList = () => {
  return (
    <>
        <h1 className= {styles.title}>Homme</h1>
        <FilterContainer/>
        <Products/>
    </>
  )
}

export default ProductsList