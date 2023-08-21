import Link from "next/link";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          <img src="/additude_payoff_cmyk.jpg" />
        </div>
      </Link>
      {/* <nav>
        <ul>
          <li>
            <Link href="/speakers">Speakers</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default MainNavigation;
