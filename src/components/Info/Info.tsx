import "./styles/Info.css";
import linkedin from "./images/linkedin-svgrepo-com.svg";
import git from "./images/iconmonstr-github-2.svg";
import telegram from "./images/telegram-svgrepo-com.svg";

function Info() {
  return (
    <div className="Info">
      <div className="info-content">
        <p>
          Website created by Confucii. <br />
          Art by <a href="https://nexusroku.tumblr.com/">
            Laurie Greasley
          </a> and{" "}
          <a href="https://www.instagram.com/deathburger/">Josan Gonzalez</a>.
        </p>
        <div className="images">
          <a href="https://github.com/Confucii">
            <img className="ref-img" src={git} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/confucii/">
            <img className="ref-img" src={linkedin} alt="LinkedIn icon" />
          </a>
          <a href="https://t.me/ImRealConfucii">
            <img className="ref-img" src={telegram} alt="telegram icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
