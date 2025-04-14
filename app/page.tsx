import { Button } from 'antd';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button color="primary" variant="solid">
          Solid
        </Button>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
