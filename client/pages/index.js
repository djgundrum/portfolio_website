import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <html>
      <head>
        <link href="https://use.typekit.net/nht7ybu.css" rel="stylesheet" />
      </head>
      <body>
        <div className={styles.holder}>
          <div className={styles.navigation}>
            <div className={styles.hamburger}></div>
          </div>
          <div className={styles.first}>
            <div className={styles.left_side}>
              <div className={styles.title_text}>Hi There</div>
              <div className={styles.cuty_picture}></div>
            </div>
            <div className={styles.right_side}>
              <div className={styles.right_side_text}>
                <div>
                  I am a digital communicator <br></br> currently honing my
                  craft at <br></br>the University of Louisville.
                </div>
                <div className={styles.coordinates}>38.2123° N, 85.7585° W</div>
              </div>
              <div className={styles.right_side_bar}>
                <div className={styles.circle_text}></div>
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.down_arrow}></div>
            <div className={styles.second_image}></div>
            <div className={styles.second_text}>
              I am drawn towards modern design that <br></br> clearly
              communicates with the viewer. <br></br>Take a look at some of my
              work below.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
