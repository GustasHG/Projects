import styles from './LoginCard.module.css'
export default function LoginCard({ children}){
    return(
        <div className = {styles.card} >
         
            {children}
        </div>
    )
}