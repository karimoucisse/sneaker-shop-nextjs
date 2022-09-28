import styles from "../styles/BasketItems.module.css"
import Image from "next/image"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const BasketItems = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.left}>
            <Image src= "/produit.jpg" layout='fill' objectFit="cover"/>
        </div>
        <div className= {styles.right}>
            <div className= {styles.top}>
                <div>
                    <h3>Air max 97</h3>
                    <p>Prix: 197€</p>
                    <p>Couleur: bleu</p>
                    <p>Taille: 40</p>
                </div>
                <DeleteOutlineOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default BasketItems