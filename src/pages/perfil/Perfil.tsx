import loginLogo from "../../assets/login.jpg";

function Perfil() {
  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
      <img
        className="w-full h-72 object-cover border-b-8 border-white"
        src={loginLogo}
        alt="Capa do Perfil"
      />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center"></div>
    </div>
  );
}

export default Perfil;
