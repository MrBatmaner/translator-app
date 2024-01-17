//import firebase from "../firebase";
//import * as firebase from "@/firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isAsc, setIsAsc] = useState(true);
  const [locale, setLocale] = useState("en");
  const [messagesSnapshot, loading, error] = useCollection(
    db.collection("messages").orderBy("timestamp", isAsc ? "asc" : "desc")
  );
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value = "";
  };

  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  console.log(locale);

  return (
    <div className={styles.container}>
      <Head>
        <title>Translator App</title>
        <link ref="icon" href="/favicon.ico"></link>
      </Head>

      <h1>Translation App</h1>
      {messagesSnapshot?.docs.map((doc) => (
        <div key={doc.id}>
          <p>{doc.data().translated?.[locale]}</p>
        </div>
      ))}

      <button onClick={() => setIsAsc(!isAsc)}>Flip sort order</button>

      <select value={locale} onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="ru">Russian</option>
        <option value="ar">Arabic</option>
      </select>

      <form>
        <input ref={inputRef} type="text" />
        <button onClick={onSubmit} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
