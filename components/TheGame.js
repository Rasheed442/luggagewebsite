import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { accessories, bags, shopsuitcases, suitcases } from "../public/BG";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import styles from "../styles/components/thegame.module.css";
import { everyonelugg, gearlab, reviewlugg, trav } from "../public/NORMAL";
import "@arco-design/web-react/dist/css/arco.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Carousel } from "@arco-design/web-react";
import Footer from "./Footer";
function TheGame() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);

  const imageSrc = [
    "The best hard-sided carry-on suitcases",
    "Away is the only way to travel",
    "Though Away has been around for seven years, the lagos based brand has left  its mark on the world--- just visit any airport you'll see yourself ",
  ];

  return (
    <>
      <div className={styles.header}>
        <h1>The Luggage that changed the game</h1>
        <div className={styles.flexout}>
          <div
            className={styles.top}
            onMouseOver={() => {
              setShow1(false);
            }}
            onMouseOut={() => setShow1(true)}
          >
            <div className={styles.content}>
              <Image src={everyonelugg} width={370} />
              <p>
                {show1 ? <IoMdAdd size={20} /> : <FaMinus />} TRIED & TESTED
              </p>
            </div>
            <div className={show1 ? styles.tit : styles.title}>
              With a virtually unbreakable <br />
              hard shell, our best-selling
              <br /> suitcases are rigorously <br /> tested for durability—{" "}
              <br />
              because sometimes travel
              <br /> means a few bumps in the
              <br /> road.
            </div>
          </div>
          <div
            className={styles.top}
            onMouseOver={() => {
              setShow2(false);
            }}
            onMouseOut={() => setShow2(true)}
          >
            <div className={styles.content}>
              <Image src={gearlab} width={370} />
              <p>
                {show2 ? <IoMdAdd size={20} /> : <FaMinus />} TRIED & TESTED
              </p>
            </div>
            <div className={show2 ? styles.tit : styles.title}>
              With a virtually unbreakable <br />
              hard shell, our best-selling
              <br /> suitcases are rigorously <br /> tested for durability—{" "}
              <br />
              because sometimes travel
              <br /> means a few bumps in the
              <br /> road.
            </div>
          </div>
          <div
            className={styles.top}
            onMouseOver={() => {
              setShow3(false);
            }}
            onMouseOut={() => setShow3(true)}
          >
            <div className={styles.content}>
              <Image src={reviewlugg} width={370} />
              <p>
                {show3 ? <IoMdAdd size={20} /> : <FaMinus />} TRIED & TESTED
              </p>
            </div>
            <div className={show3 ? styles.tit : styles.title}>
              With a virtually unbreakable <br />
              hard shell, our best-selling
              <br /> suitcases are rigorously <br /> tested for durability—{" "}
              <br />
              because sometimes travel
              <br /> means a few bumps in the
              <br /> road.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.carousel}>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          HOT OFF THE PRESS
        </p>
        <Carousel style={{ width: "100%" }}>
          {imageSrc.map((s) => {
            return (
              <div className={styles.word}>
                <p>{s}</p>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={styles.categories}>
        <div className={styles.sort}>
          <Image src={suitcases} />
          <h3>
            DAKAR, SENEGAL <FaArrowRight size={20} />
          </h3>
          <p>
            With some of the hottest music, fashion, and art scenes out of West
            Africa, we’re keeping a close eye on Dakar in 2024.
          </p>
        </div>
        <div className={styles.sort}>
          <h4>
            Inspires your
            <br /> <span>TRAVELS</span>
          </h4>
          <Image src={bags} />
          <h3>
            COPENHAGEN, DENMARK <FaArrowRight size={20} />
          </h3>
          <p>
            With some of the hottest music, fashion, and art scenes out of West
            Africa, we’re keeping a close eye on Dakar in 2024.
          </p>
        </div>
        <div className={styles.sort}>
          <Image src={accessories} />
          <h3>
            SHIKOKU, JAPAN <FaArrowRight size={20} />
          </h3>
          <p>
            A more traditional, rural side of Japan that most tourists
            <br /> overlook. Take a breather in the movie-inspiring onsen and
            prepare to eat the best udon in the country (possibly the world).
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <Image src={trav} style={{ width: "100%" }} />
        <div className={styles.deal}>
          <h2>Here's the deal</h2>
          <div className={styles.restriction}>
            <p>* Restrictions apply. See the Sale Terms and Conditions.</p>
            <Link href="/">
              <span>
                SEE TERMS AND CONDITION <FaArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TheGame;
// const Header = styled.div`
//   .header {
//     padding: 50px;
//   }
//   .header h1 {
//     font-weight: 500;
//     color: brown;
//   }
//   .content p {
//     position: absolute;
//     bottom: 30px;
//     display: flex;
//     align-items: center;
//     left: 30px;
//     background-color: white;
//     padding: 10px;
//     gap: 5px;
//     border-radius: 15px;
//     cursor: pointer;
//   }
//   .content {
//     position: relative;
//   }
//   .title {
//     position: absolute;
//     top: 0;
//     padding: 20px;
//     background-color: white;
//     opacity: 0.8;
//     height: 100%;
//     /* display: none; */
//   }
//   .top {
//     position: relative;
//     width: 28%;
//   }
// `;
