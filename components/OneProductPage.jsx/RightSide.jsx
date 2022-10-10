import { addProduct } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"
import styles from "../../styles/components-css/RightSide.module.css"
import { useState } from "react"

const RightSide = ({product}) => {
    const dispatch = useDispatch()
    const [size, setSize] = useState(39)
    const [color, setColor] = useState(product.types[0].color)

    const handleClick = () => {
        dispatch(addProduct({...product, size, types: {color}})) 
    }
    const handleSizeChange = (size) => {
        setSize(size)
    }
    const onColorClick = (itemColor) => {
        setColor(itemColor)
    }
    console.log(product.types[0].color);
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
                    {product.types.map(type => (
                        <div className= {styles.filter_color} 
                            style= {{backgroundColor: type.color}} 
                            key= {type.color} 
                            onClick= {() => onColorClick(type.color)}
                        >
                        </div>
                    ))}

                </div>
                <div className= {styles.filtre}>
                    <h2>Size</h2>
                    {product.size?.map(item => {
                        return <div 
                                    className={size == item ? styles.filter_size_active : styles.filter_size} 
                                    onClick= {() => handleSizeChange(item)}>{item}
                                </div> 
                    })}                    
                </div>
            </div>
            <button onClick={handleClick}>Ajouter au panier</button>
            {/* <SuccessContainer success= {success}>
                <CheckCircleOutlineOutlinedIcon/>
                <Paragraph>Ajouter au panier</Paragraph>
            </SuccessContainer> */}
        </div>
    )
}

export default RightSide