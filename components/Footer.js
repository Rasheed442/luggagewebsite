import React from "react";
import styles from "../styles/components/footer.module.css";
function Footer() {
  const footer = [
    {
      footerHeader: "SHOP",
      links: [
        "Best Sellers",
        "Suitcases",
        "Bags",
        "Accessories",
        "Shop all",
        "New Arrivals",
        "Corporate gifting",
        "Gift card",
      ],
    },
    {
      footerHeader: "SHOP",
      links: [
        "Best Sellers",
        "Suitcases",
        "Bags",
        "Accessories",
        "Shop all",
        "New Arrivals",
        "Corporate gifting",
        "Gift card",
      ],
    },
    {
      footerHeader: "SHOP",
      links: [
        "Best Sellers",
        "Suitcases",
        "Bags",
        "Accessories",
        "Shop all",
        "New Arrivals",
        "Corporate gifting",
        "Gift Card",
      ],
    },
  ];
  return (
    <div className={styles.top}>
      {footer.map((f) => {
        return (
          <div className={styles.links}>
            <h3>{f?.footerHeader}</h3>
            <p>{f?.links}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
