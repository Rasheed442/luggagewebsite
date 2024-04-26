import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/components/header.module.css";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import "aos/dist/aos.css"; // Import the CSS file
import AOS from "aos";
function Header() {
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <Container>
      <Head>
        <title>Luugage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.none}></div>
          <div className={styles.topfooter}>
            <p>
              You have a bucket list. We have the luggage. Shop now
              <FaArrowRight size={13} />{" "}
            </p>
          </div>
          <div className={styles.links}>
            <Link href="">
              <span>Help</span>
            </Link>
            <Link href="">
              <span>Stores</span>
            </Link>
            <Link href="">
              <span>
                <CiLocationOn size={15} />
                Lagos
              </span>
            </Link>
          </div>
        </div>

        {/* Second Header for luggage Links */}
        <div className={styles.brand}>
          <h2>LOGO</h2>
          <div className={styles.navlinks}>
            <Link href="">
              <span>BEST SELLERS</span>
            </Link>
            <Link href="">
              <span>SUIT CASES</span>
            </Link>
            <Link href="">
              <span>BAGS</span>
            </Link>
            <Link href="">
              <span>ACCESSORIES</span>
            </Link>
            <Link href="">
              <span>GUIDES & COLLECTION</span>
            </Link>
            <Link href="">
              <span style={{ color: "red" }}>SALE</span>
            </Link>
          </div>
          <div className={styles.logs}>
            <span>LOG IN</span>
            <span
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              <CiSearch size={24} />
            </span>
            <span className={styles.bag}>
              <SlBag size={25} />
              <span>0</span>
            </span>
          </div>
        </div>
        {showSearch && (
          <div className={styles.searchheader} data-aos="fade-down">
            <div className={styles.search}>
              <div className={styles.prod}>
                <CiSearch size={24} />
                <input type="text1" placeholder="Search Products, features" />
              </div>
              <span>SEARCH</span>
            </div>
          </div>
        )}
      </main>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  .main {
    position: fixed;
    width: 100vw;
  }
  .prod {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .searchheader {
    position: absolute;
    width: 100vw;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
  .search {
    align-items: center;
    display: flex;
    border-bottom: 1px solid black;
    justify-content: space-between;
    padding-bottom: 10px;
    width: 30%;
  }
  .search span {
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
  }
  .prod input {
    border: none;
    width: 22vw;
    outline: none;
    font-size: 15px;
  }
  .prod input::placeholder {
    font-size: 15px;
    font-style: italic;
    color: gainsboros;
    color: #a9a9a9;
  }
  .bag {
    position: relative;
  }
  .bag span {
    position: absolute;
    left: 8px;
    top: 5px;
  }
  .logs {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }

  .navlinks span {
    color: black;
    font-size: 15px;
    font-weight: 500;
  }
  .navlinks {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .brand {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 10px 70px;
    border-bottom: 1px solid gainsboro;
  }
  .brand h2 {
    background-color: black;
    color: white;
    padding: 10px;
  }
  .top {
    background-color: #482121;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }
  .top p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 13px;
  }
  .topfooter {
    width: 80%;
    display: flex;
    justify-content: center;
  }
  .top span {
    color: white;
  }
  .links {
    display: flex;
    gap: 20px;
    width: 20%;
  }
  .links span {
    font-size: 15px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .none {
    width: 20%;
  }
`;