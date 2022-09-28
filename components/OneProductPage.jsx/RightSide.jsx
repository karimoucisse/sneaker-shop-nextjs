import styles from "../../styles/components-css/RightSide.module.css"

const RightSide = () => {
  return (
    <div className= {styles.container}>
        <h1 className= {styles.title}>Air max 97</h1>
        <p className= {styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, 
            consequuntur eos omnis nesciunt ipsa ullam nemo illum incidunt consequatur 
            neque cumque modi laboriosam velit inventore id error, dolorum tenetur. Autem.
        </p>
        <span className= {styles.price}>186€</span>
        <div className= {styles.filtre_container}>
            <div className= {styles.filtre}>
                <h2>Color</h2>
            
            </div>
            <div className= {styles.filtre}>
                <h2>Size</h2>
                    <div className={styles.filter_size}>40</div> 
                    <div className={styles.filter_size}>40</div> 
                    <div className={styles.filter_size}>40</div> 
                    <div className={styles.filter_size}>40</div> 
                    <div className={styles.filter_size}>40</div> 
                    <div className={styles.filter_size}>40</div> 
                    <div className={styles.filter_size}>40</div> 
                    
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