import styles from "./style";
import { Footer, Body } from "./components";

const App = () => (
  <div className="bg-img w-full overflow-hidden">
    <div className="overlay-bg">
      <div className={`${styles.padding} ${styles.paddingBody}`}>
        <center>
          <Body />
        </center>
      </div>

      <div className={`${styles.padding}`}>
        <div className={`${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
