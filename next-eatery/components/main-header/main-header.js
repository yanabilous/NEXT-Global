import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
  console.log("Execute..")
  return (
    <>
      <MainHeaderBackground/>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg.src} alt="logo" priority width={40} height={40}/>
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            {/*<li>*/}
            {/*  <Link href="../app/meals/share" style={{color: "white", textAlign: "center"}}>Share Meal</Link>*/}
            {/*</li>*/}
            <li>
              <Link href="/community"> Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
