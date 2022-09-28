import styles from "../styles/Login.module.css"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

const Login = () => {
    const [isHidden, setIsHidden] = useState(true)
    
  return (
    <div className= {styles.container}>
        <div className= {styles.wrapper}>
            <h1 className= {styles.title}>SE CONNECTER</h1>
            <form>
                <input 
                    placeholder= "email"
                    type= "text"
                    name= "email"
                />
                <div className= {styles.Password_container}>
                    <input 
                        placeholder= "mot de passe" 
                        type= {isHidden ? "password" : "text"}
                        name= "password"
                    />
                    {isHidden 
                        ? <VisibilityOffIcon onClick={() => setIsHidden(false)}  className= {styles.eye_icon}/> 
                        : <VisibilityIcon onClick={() => setIsHidden(true)} className= {styles.eye_icon}/>
                    }
                </div>
                <button type= "submit" className= {styles.form_btn}>SE CONNECTER</button>
                <a>Mot de passe oublié</a>
                <p>Vous n'êtes pas encore membre ?<a>Rejoignez-nous.</a></p>
            </form>
        </div>
    </div>
  )
}

export default Login