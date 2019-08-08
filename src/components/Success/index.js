import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import styles from "./styles.module.css";
import Container from "@material-ui/core/Container";

const content = [
  {
    title: "Taha",
    image: "#",
    description:
      "Thank you so much for finding my phone. It has sensitive data so thank you for being so professional and fast. "
  },
  {
    title: "Kasim",
    image: "#",
    description:
      "Thank you very much. I now have my prized possession back after only 2 days. "
  },
  {
    title: "Halil",
    image: "#",
    description:
      "The customer host found and turned in my iPad. I am incredibly grateful!"
  }
];

function SuccessStory() {
  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.title}>
          <h2>Success Story</h2>
          <p>See how Lost and Found helped others to find their lost items.</p>
        </div>
        <Slider autoplay={3000}>
          {content.map(items => (
            <div
              key={items.title}
              style={{
                background: `url('${items.img}') no-repeat center center`
              }}
            >
              <div className={styles.content}>
                <p>{items.description}</p>
                <h4>{items.title}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default SuccessStory;
