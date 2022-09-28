import LeftSide from "../../components/OneProductPage.jsx/LeftSide"
import RightSide from "../../components/OneProductPage.jsx/RightSide"
import styles from "../../styles/pages-css/Product.module.css"

const Product = () => {
  return (
    <div className= {styles.container}>
        <LeftSide/>
        <RightSide/>
    </div>
  )
}

export default Product