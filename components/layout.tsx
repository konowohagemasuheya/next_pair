import styles from './layout.module.css';

function Layout({children}: {children: React.ComponentType}) {
    return <div className={styles.container}>{children}</div>
}

export default Layout;