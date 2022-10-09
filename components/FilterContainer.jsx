import styles from "../styles/components-css/FilterContainer.module.css"
import { useDispatch } from "react-redux"
import { update } from "../redux/filtreSlice"
import { useEffect, useState } from "react"

const FilterContainer = () => {
    const dispatch = useDispatch()
    const [filters, setFilters] = useState({})

    const handleFiltersChange = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name] : value
        })
    }

    useEffect( () => {
        dispatch(update({
            filter: filters.filter, 
            sort: filters.sort
        }))
    }, [filters])
    
    return (
        <div className= {styles.container}>
            <div className= {styles.filter}>
                <span className= {styles.title}>Filtrer par marques: </span>
                <select name= "filter" onChange={handleFiltersChange}>
                    <option>Toutes les chaussures</option>
                    <option>Nike</option>
                    <option>Adidas</option>
                    <option>Jordan</option>
                    <option>Asics</option>
                </select>
            </div>
            <div className= {styles.filter}>
                <span className= {styles.title}>Trier les produits: </span>
                <select name= "sort" onChange={handleFiltersChange}>
                    <option>Les plus récents</option>
                    <option>Prix: croissant</option>
                    <option>Prix: décroissant</option>
                </select>
            </div>
        </div>
    )
}

export default FilterContainer