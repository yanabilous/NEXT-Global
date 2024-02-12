import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="logo"/>
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="meals">Meals</Link>
          </li>
          <li>
            <Link href="meals/share" style={{color: "white", textAlign: "center"}}>Share Meal</Link>
          </li>
          <li>
            <Link href="community" style={{color: "white", textAlign: "center"}}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
