import styles from "../styles/NewProducts.module.css"
import Product from "./Product"

const NewProducts = () => {
  return (
    <div className= {styles.container}>
        <h2>Nouveautés</h2>
        <div className= {styles.box}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default NewProducts