import LeftSide from "../../components/OneProductPage.jsx/LeftSide"
import RightSide from "../../components/OneProductPage.jsx/RightSide"
import styles from "../../styles/pages-css/Product.module.css"
import { getProducts } from "../api/apiCalls/getProducts"

const Product = ({product}) => {
  return (
    <div className= {styles.container}>
        <LeftSide/>
        <RightSide product= {product}/>
    </div>
  )
}

export default Product

export async function getServerSideProps({params}) {
  const URL = `http://localhost:3000/api/products/${params.id}`
  let product = await getProducts(URL)
  console.log(product);
  return {
    props:{
      product: product
    }
    
  }
}