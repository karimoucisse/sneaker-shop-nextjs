import styles from "../styles/components-css/Navbar.module.css" //css page
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/Link"
import { useSelector } from "react-redux"


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const navItems = [
    {
      path: 'man',
      name: 'Homme'
    },
    {
      path: 'woman',
      name: 'Femme'
    },
    {
      path: 'man',
      name: 'Enfant'
    }
  ]
  return (
    <div className= {styles.container}>
      <div className= {styles.left}>
        <div className= {styles.logo}><Link href={"/"}>Sneaker Shop</Link></div>
      </div>
      <div className= {styles.center}>
        {navItems.map((navItem, index) => {
          return <p className= {styles.category} key= {index}>
                  <Link href= {`/productsList/${navItem.path}`}>{navItem.name}</Link>
                </p>
        })}
      </div>
      <div className= {styles.right}>
        <p className= {styles.menu_item}><Link href= "/signup">S'inscrire</Link></p>
        <p className= {styles.menu_item}><Link href= "/login">Se connecter</Link></p>
        <div className= {styles.badge_container}>
          <Badge 
            badgeContent={quantity} color="primary"
          >
            <Link href= "/basket"><ShoppingCartIcon color="action" /></Link>
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Navbar
