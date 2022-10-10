import styles from "../styles/components-css/BasketItems.module.css"
import Image from "next/image"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const BasketItems = ({product}) => {
  return (
    <div className= {styles.container}>
        <div className= {styles.left}>
            <Image src= "/produit.jpg" layout='fill' objectFit="cover"/>
        </div>
        <div className= {styles.right}>
            <div className= {styles.top}>
                <div>
                    <h3 className= {styles.title}>{product.name}</h3>
                    <p>Prix: {product.price}€</p>
                    <p>Couleur: bleu</p>
                    <p>Taille: 40</p>
                </div>
                <DeleteOutlineOutlinedIcon style={{ cursor: "pointer" }}/>
            </div>
        </div>
    </div>
  )
}

export default BasketItems