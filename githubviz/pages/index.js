import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Router from "next/router";
import { useState } from "react";

const StyledContainer = styled.div``;

export default function Home() {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);
  return (
    <main className={styles.main}>
      <Head>
        <title>Github Data Viz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledContainer>
        <form
          className={styles.title}
          onSubmit={(event) => {
            handleChange();
            event.preventDefault();
            Router.push({
              pathname: "/user",
              query: { id: username },
            });
          }}
        >
          <label htmlFor="username">
            <h1 className={styles.title}>✨Github Data Viz✨</h1>
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Github Username"
          />
          <input type="submit" value="Submit" />
        </form>
      </StyledContainer>
    </main>
  );
}
