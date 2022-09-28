import styles from "../styles/pages-css/Signup.module.css"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

const Signup = () => {
    const [isHidden, setIsHidden] = useState(true)

  return (
    <div className= {styles.container}>
        <div className= {styles.wrapper}>
            <h1 className= {styles.title}>CREER UN COMPTE</h1>
            <form>
                <input 
                    placeholder= "prénom"
                    type= "text"
                    name= "firstName"
                />
                <input 
                    placeholder= "nom"
                    type= "text"
                    name= "lastName"
                />
                <input 
                    placeholder= "email"
                    type= "text"
                    name= "email"
                />
                <div className= {styles.password_container}>
                    <input 
                        className= {styles.PasswordInput}
                        placeholder= "mot de passe" 
                        type= {isHidden ? "password" : "text"}
                        name= "password"
                    />
                    {isHidden 
                        ? <VisibilityOffIcon 
                            onClick={() => setIsHidden(false)} 
                            className= {styles.eye_icon}
                        /> 
                        : <VisibilityIcon 
                            onClick={() => setIsHidden(true)} 
                            className= {styles.eye_icon}
                        />
                    }
                    
                </div>
                <button type="submit" className= {styles.form_btn}>S'inscrire</button>
            </form>
        </div>
    </div>
  )
}

export default Signup