import styles from "../styles/components-css/PaymentContainer.module.css"

const PaymentContainer = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.card}>
            <h2 className= {styles.title}>Sneaker Shop</h2>
            {/* <p>Connectez-vous pour poursuivre votre achat !</p>
            <button onClick={() => navigate('/login')}>Identification</button> */}

            <div className= {styles.price_container}>
                <p>Montant de la commande</p>
                <p>186€</p>
            </div>
            <div className= {styles.price_container}>
                <p>Livraison</p>
                <p>4€</p>
            </div>
            <div className= {styles.total_container}>
                <p>Total:</p>
                <p>190€</p>
            </div>
            {/* <StripeCheckout
                // nom de mon entreprise
                name= "Sneaker Shop"
                // Logo
                image= "https://cdn.shopify.com/s/files/1/2358/2817/products/air-max-90-off-white-desert-ore-672202.png?v=1638813390"
                description={`Votre Total est de ` + finalTotal + "€" }
                // montant * 100 car le prix est en cents
                amount= {stripeTotal}
                // contient des information du type :
                // la date de l'achat, le type d'achat par cart par exemple
                // notre email
                token = {onToken}
                stripeKey= {stripePubliKey}
                currency="EUR"
            > */}
            <button className= {styles.validation_btn}>
                Finaliser la commande
            </button>
            <div className= {styles.paragraph}>
                <p>Les prix et les frais de livraison ne sont validés que durant la finalisation de la commande.</p>
                <p>Délai de rétractation de 30 jours. </p>
            </div>
            {/* </StripeCheckout> */}
        </div>
    </div>
  )
}

export default PaymentContainer