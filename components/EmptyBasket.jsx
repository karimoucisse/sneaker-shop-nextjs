import styles from "../styles/EmptyBasket.module.css"

const EmptyBasket = () => {
  return (
    <div className= {styles.container}>
        <p>VOTRE PANIER NE COMPORTE AUCUN ARTICLE .</p>
        <button>Retourner à la page d'accueil</button>
    </div>
  )
}

export default EmptyBasket