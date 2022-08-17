import styles from './Header.module.scss';
import { Navbar } from './Navbar/Navbar';
import logo from '../../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo}></img>
      <Navbar />
    </header>
  );
};
