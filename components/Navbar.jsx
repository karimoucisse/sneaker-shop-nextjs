import styles from "../styles/Navbar.module.css" //css page
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.left}>
        <div className= {styles.logo}>Sneaker Shop</div>
      </div>
      <div className= {styles.center}>
        <p className= {styles.category}>Homme</p>
        <p className= {styles.category}>Femme</p>
        <p className= {styles.category}>Enfant</p>
      </div>
      <div className= {styles.right}>
        <p className= {styles.menu_item}>S'inscrire</p>
        <p className= {styles.menu_item}>Se connecter</p>
        <div className= {styles.badge_container}>
          <Badge 
            badgeContent={1} color="primary"
          >
            <ShoppingCartIcon color="action" />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Navbar
