import FilterContainer from "../../components/FilterContainer"
import Products from "../../components/Products"
import styles from "../../styles/pages-css/ProductsList.module.css"
import { getProducts } from "../api/apiCalls/getProducts"
import { useRouter } from 'next/router'

const ProductsList = ({products}) => {
  const router = useRouter()
  const {id} = router.query
  return (
    <>
    <h1 className= {styles.title}>{id === "man" ? "Homme" : id === "woman" && "Femme"} </h1>
      <FilterContainer/>
        <Products products = {products}/>
    </>
  )
}

export default ProductsList

export async function getServerSideProps({params}) {
  const URL = `http://localhost:3000/api/products/${params.id}`
  let products = await getProducts(URL)
  console.log(products);
  return {
    props:{
      products: products
    }
    
  }
}