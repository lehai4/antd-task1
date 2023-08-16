import { useParams } from "react-router-dom";
import { SignIn } from "..";
import logo from "../../assets/img/logo.png";

const AuthForm = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="items-center flex justify-center mt-20 mb-16">
        <img src={logo} alt="Alta Software" />
      </div>
      {!slug && <SignIn />}
    </div>
  );
};

export default AuthForm;
