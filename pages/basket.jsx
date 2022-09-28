import EmptyBasket from "../components/EmptyBasket"
import styles from "../styles/Basket.module.css"

const Basket = () => {
  return (
    <>
        <h1 className= {styles.title}>Panier</h1>
        <div className= {styles.container}>
            <div products_container>
                {products.map((item, index) => 
                    <BasketItems item = {item} index= {index} key = {index} /> 
                )}
            </div>
            <TotalCard />
            {/* <EmptyBasket/> */}
        </div>
    </>
  )
}

export default Basket