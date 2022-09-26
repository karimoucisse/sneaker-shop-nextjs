import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.left}>
        <div className= {styles.logo}>Sneaker Shop</div>
      </div>
      <div className= {styles.center}>
        <p className= {styles.category}>Homme</p>
        <p className= {styles.category}>Femme</p>
      </div>
      <div className= {styles.right}>
        <p className= {styles.menu_item}>S'inscrire</p>
        <p className= {styles.menu_item}>Se connecter</p>
      </div>
    </div>
  )
}

export default Navbar
