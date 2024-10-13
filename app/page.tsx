"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import { store } from "./store";
import MainUser from "./components/mainUser";

export default function Home() {
  return (
    <Provider store={store}>
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            El siguiente programa es un CRUD de usuarios
          </li>
          <li>Presiona, "CREATE USER +" para crear un usuario</li>
          <li>Presiona, "EDIT" en cualquiera de los registros creados para editar</li>
          <li>Presiona, "DELETE" en cualquiera de los registros creados para eliminar</li>
        </ol>
      <MainUser/>
      </main>
    </div>
    </Provider>
  );
}
