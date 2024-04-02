import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image alt="image" src="/images/site/me.png" width={300} height={300}/>
    </div>
    <h1>Hi, I am Yana</h1>
    <p>
      I blog about web development - especially frontend frameworks like React.
    </p>
  </section>;

}

export default Hero;