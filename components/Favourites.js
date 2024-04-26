import React from "react";
import Image from "next/image";
import {
  Everywherebag,
  accessories,
  aluminiumbag,
  bags,
  carryon,
  crossbag,
  kay2,
  shikoku,
  shopbag,
  shopsuitcases,
  suitcases,
} from "../public/BG";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import TheGame from "./TheGame";
import styles from "../styles/components/favourites.module.css";
function Favourites() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bags}>
          <Image src={carryon} />
          <div>
            <p>The Bigger Carry-On</p>
            <span>120,000</span>
          </div>
        </div>
        <div className={styles.bags}>
          <Image src={crossbag} />
          <div>
            <p>The Everyday Crossbody</p>
            <span>120,000</span>
          </div>
        </div>
        <div className={styles.bags}>
          <Image src={Everywherebag} />
          <div>
            <p>The Everyday Crossbody</p>
            <span>120,000</span>
          </div>
        </div>
        <div className={styles.bags}>
          <Image src={aluminiumbag} />
          <div>
            <p>The Everyday Crossbody</p>
            <span>120,000</span>
          </div>
        </div>
      </div>
      <div className={styles.innovation}>
        <Image src={kay2} />
        <div className={styles.travelinnovation}>
          <p>INNOVATION IN TRAVEL</p>
          <h3>
            Keep it together—
            <br />
            everywhere{" "}
          </h3>
          <span>
            We took the “lug” out of luggage. With our bags that attach to our
            suitcases, you can easily roll all your belongings with one hand.
          </span>

          <div className={styles.shops}>
            <div className={styles.shopping}>
              <Image src={shopbag} />
              <span>
                SHOP BAGS <FaArrowRight size={20} />
              </span>
            </div>
            <div className={styles.shopping}>
              <Image src={shopsuitcases} />
              <span>
                SHOP SUITCASES <FaArrowRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inspiration}>
        <div className={styles.wheretogo}>
          <p>TRAVEL INSPIRATION</p>
          <h2>Where to go in 2024</h2>
          <h4>
            Dust off your bucket list—we put together an interactive guide to
            our most-
            <br />
            anticipated travel destinations of 2024.
          </h4>
          <h3>
            GET THE SCOOP <FaArrowRight size={20} />
          </h3>
        </div>
        <Image src={shikoku} />
      </div>

      <div className={styles.categories}>
        <div className={styles.sort}>
          <Image src={suitcases} />
          <h3>
            SUITCASES <FaArrowRight size={20} />
          </h3>
          <p>
            Carry-on, checked, Classic, Aluminum. Shop our best-selling
            suitcases in different sizes, styles, and colors.
          </p>
        </div>
        <div className={styles.sort}>
          <h4>
            Shop by
            <br /> <span>CATEGORY</span>
          </h4>
          <Image src={bags} />
          <h3>
            BAGS <FaArrowRight size={20} />
          </h3>
          <p>
            Quick trips, long weekend getaways, and everything in between. Our
            bags are designed to do it all.
          </p>
        </div>
        <div className={styles.sort}>
          <Image src={accessories} />
          <h3>
            ACCESSORIES <FaArrowRight size={20} />
          </h3>
          <p>
            Make packing a breeze. Keep your essentials organized on the go with
            our travel accessories and organizers.
          </p>
        </div>
      </div>

      <div className={styles.selectstyles}>
        <p>Up to 45% off select styles*</p>
        <button>SHOP THE SALE</button>
      </div>
      <TheGame />
    </>
  );
}

export default Favourites;

// const Header = styled.div`
//   .selectstyles {
//     background-color: black;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 25px;
//     padding: 30px;
//   }
//   .selectstyles button {
//     background-color: white;
//     color: black;
//     font-size: 20px;
//     border: none;
//     padding: 20px;
//     width: 20%;
//   }
//   .selectstyles p {
//     color: white;
//     font-size: 35px;
//     font-family: "Times New Roman", Times, serif;
//   }
//   .categories {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 80px;
//     gap: 40px;
//   }
//   .sort {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//   }
//   .sort h4 {
//     text-align: center;
//     font-size: 20px;
//     font-weight: 500;
//     padding-bottom: 70px;
//     font-family: "Times New Roman", Times, serif;
//   }
//   .sort h3 {
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     font-weight: 400;
//     font-size: 17px;
//   }
//   .sort p {
//     font-weight: 200;
//     color: gray;
//   }
//   .sort span {
//     font-size: 55px;
//     letter-spacing: 10px;
//   }
//   .sort img {
//     width: 100%;
//     height: 80%;
//   }
//   .wheretogo {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     background-color: #f7f0ea;
//     padding: 20px;
//     gap: 30px;
//     width: 82.5%;
//   }
//   .wheretogo h2 {
//     font-size: 60px;
//     font-weight: 300;
//     font-family: "Times New Roman", Times, serif;
//   }
//   .wheretogo h3 {
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     font-weight: 500;
//     font-size: 17px;
//   }
//   .wheretogo h4 {
//     font-weight: 300;
//     font-size: 17px;
//     display: flex;
//   }
//   .inspiration {
//     display: flex;
//     justify-content: space-between;
//   }
//   .inspiration img {
//     height: 60%;
//   }
//   .travelinnovation {
//     padding: 70px;
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//   }
//   .travelinnovation p {
//     font-size: 20px;
//     font-family: "Times New Roman", Times, serif;
//     letter-spacing: 7px;
//   }
//   .travelinnovation span {
//     font-weight: 100;
//     font-size: 17px;
//   }
//   .travelinnovation h3 {
//     font-weight: 400;
//     font-size: 45px;
//   }
//   .shopping {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//     cursor: pointer;
//   }

//   .shops {
//     display: flex;
//     justify-content: space-between;
//     padding: 50px;
//     gap: 80px;
//   }
//   .shopping img {
//     width: 100%;
//     height: 70%;
//   }
//   .shopping span {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     font-weight: 400;
//     font-size: 16px;
//   }

//   .innovation {
//     display: flex;
//     background-color: #f7f0ea;
//   }
//   .innovation img {
//     width: 85%;
//     height: 100%;
//   }
//   .container {
//     display: flex;
//     justify-content: center;
//     padding: 60px 0px 120px;
//   }
//   .bags img {
//     width: 100%;
//     height: 100%;
//   }
//   .bags p {
//     font-weight: 500;
//     color: gray;
//     font-size: 14px;
//   }
// `;
