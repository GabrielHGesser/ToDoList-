// Import Images
import logoHeader from ".././assets/logo.svg";

export const Header = () => {
  return (
    <header className="w-full flex item-center justify-center bg-gray_700 py-20">
      <img className="" src={logoHeader} alt="Logo da Empresa" />
    </header>
  );
};
