import logo from "../assets/images/logo.svg";

export const LogoBlock: React.FC = () => {
  return (
    <div className="logo_block">
      <a href="https://estecore.ru" target="_blank" rel="noreferrer">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};
