import styles from "../styles/Footer.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image"
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.left}>
        <h3>Sneaker Shop</h3>
        <div className= {styles.icon_container}>
          <LinkedInIcon style={{cursor: "pointer"}}/>
          <GitHubIcon style={{cursor: "pointer"}}/>
        </div>
      </div>
      <div className= {styles.center}>
        <div className={styles.item}>
          <h3>Mes commandes</h3>
          <div>
            <p>Connectez-vous pour voir les commandes que vous avez passées.</p>
            <button>VOIR LES COMMANDES</button>
          </div>
        </div>
        <div className={styles.item}>
          <h3>Catégories</h3>
          <div className= {styles.categoies_container}>
            <p>Accueil</p>
            <p>Homme</p>
            <p>Femme</p>
            <p>Enfant</p>
            <p>Panier</p>
            <p>A propos</p>
          </div>
        </div>
      </div>
      <div className= {styles.right}>
        <div className= {styles.item}>
          <h3>Contact</h3>
          <div>
            <div className= {styles.contact_item}><RoomIcon/> 56 Rue labrouste,75015 Paris</div>
            <div className= {styles.contact_item}><PhoneIcon/> +33 6 57 20 40 13</div>
            <div className= {styles.contact_item}><EmailIcon/> Sneaker.Shop@gmail.com</div>
          </div>
        </div>
        <div className= {styles.item}>
          <h3>Modes de paiment</h3>
          <div className= {styles.img_container}>
            <div>
              <Image src= "/Mastercard.jpg" alt= "Mastercard" layout='fill'/>
            </div>
            <div>
              <Image src= "/Paypal.jpg" alt= "Paypal" layout='fill'/>
            </div>
            <div>
              <Image src= "/Visa.jpg" alt= "Visa" layout='fill'/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer