import styles from "../styles/Navbar.module.css" //css page
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/Link"

const Navbar = () => {
  const navItems = [
    {
      path: '/homme',
      name: 'Homme'
    },
    {
      path: '/femme',
      name: 'Femme'
    },
    {
      path: '/enfant',
      name: 'Enfant'
    }
  ]
  return (
    <div className= {styles.container}>
      <div className= {styles.left}>
        <div className= {styles.logo}><Link href={"/"}>Sneaker Shop</Link></div>
      </div>
      <div className= {styles.center}>
        {navItems.map(navItem => {
          return <p className= {styles.category}><Link href= "/productsList">{navItem.name}</Link></p>
        })}
        

      </div>
      <div className= {styles.right}>
        <p className= {styles.menu_item}><Link href= "/signup">S'inscrire</Link></p>
        <p className= {styles.menu_item}><Link href= "/login">Se connecter</Link></p>
        <div className= {styles.badge_container}>
          <Badge 
            badgeContent={1} color="primary"
          >
            <Link href= "/basket"><ShoppingCartIcon color="action" /></Link>
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Navbar
