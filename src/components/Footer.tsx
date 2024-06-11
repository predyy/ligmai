import githubIcon from "../assets/images/github-mark-white.svg";

function Footer() {
  return (
    <div className="w-full flex justify-center my-10">
      <a href="https://github.com/predyy/ligmai" target="blank">
        <img src={githubIcon} alt="github" className="w-10 h-10" />
      </a>
    </div>
  );
}

export default Footer;
