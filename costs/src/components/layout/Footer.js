import {Link} from 
'react-router-dom'
import Container from 
'./Container'
import {FaFacebook, FaInstagram, FaLinkedin}
from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
    return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
           <FaFacebook/>
        </li>
           <FaInstagram/>
        <li>
           <FaLinkedin/>
        </li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span>
         &copy: 2021
      </p>
    </footer>
   ) 
}

export default Footer