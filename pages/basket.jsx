import EmptyBasket from "../components/EmptyBasket"
import styles from "../styles/pages-css/Basket.module.css"
import BasketItems from "../components/BasketItems"
import PaymentContainer from "../components/PaymentContainer"
import { useSelector } from "react-redux"

const Basket = () => {
  const products = useSelector(state => state.cart.products)
  console.log(products);
  return (
    <>
        <h1 className= {styles.title}>Panier</h1>
        <div className= {styles.container}>
            <div className= {styles.products_container}>
              {products.map(product => {
                return <BasketItems key={product._id} product= {product}/> 
              })}  
            </div>
            <PaymentContainer/>
            {/* <EmptyBasket/> */}
        </div>
    </>
  )
}

export default Basket