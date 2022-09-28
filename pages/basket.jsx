import EmptyBasket from "../components/EmptyBasket"
import styles from "../styles/Basket.module.css"
import BasketItems from "../components/BasketItems"
import PaymentContainer from "../components/PaymentContainer"

const Basket = () => {
  return (
    <>
        <h1 className= {styles.title}>Panier</h1>
        <div className= {styles.container}>
            <div className= {styles.products_container}>
                <BasketItems/> 
                <BasketItems/> 
            </div>
            <PaymentContainer/>
            {/* <EmptyBasket/> */}
        </div>
    </>
  )
}

export default Basket