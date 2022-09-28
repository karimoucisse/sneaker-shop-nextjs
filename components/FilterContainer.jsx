import styles from "../styles/components-css/FilterContainer.module.css"

const FilterContainer = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.filter}>
            <span className= {styles.title}>Filtrer par marques: </span>
            <select>
                <option>Toutes les chaussures</option>
                <option>Nike</option>
                <option>Adidas</option>
                <option>Jordan</option>
                <option>Asics</option>
            </select>
        </div>
        <div className= {styles.filter}>
            <span className= {styles.title}>Trier les produits: </span>
            <select>
                <option>Les plus récents</option>
                <option>Prix: décroissant</option>
                <option>Prix: croissant</option>
            </select>
        </div>
    </div>
  )
}

export default FilterContainer