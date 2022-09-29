import styles from "../../styles/components-css/RightSide.module.css"

const RightSide = ({product}) => {
    
  return (
    <div className= {styles.container}>
        <h1 className= {styles.title}>{product.name}</h1>
        <p className= {styles.description}>
            {product.description}
        </p>
        <span className= {styles.price}>{product.price}€</span>
        <div className= {styles.filtre_container}>
            <div className= {styles.filtre}>
                <h2>Color</h2>
            
            </div>
            <div className= {styles.filtre}>
                <h2>Size</h2>
                {product.size.map(item => {
                    return <div className={styles.filter_size}>{item}</div> 
                })}                    
            </div>
        </div>
        <button>Ajouter au panier</button>
        {/* <SuccessContainer success= {success}>
            <CheckCircleOutlineOutlinedIcon/>
            <Paragraph>Ajouter au panier</Paragraph>
        </SuccessContainer> */}
    </div>
  )
}

export default RightSide