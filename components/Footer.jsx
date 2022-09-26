import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.left}>Left</div>
      <div className= {styles.right}>Right</div>
      <div className= {styles.center}>Center</div>
    </div>
  )
}

export default Footer