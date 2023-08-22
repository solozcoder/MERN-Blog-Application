import LoginLayout from "../../components/LoginLayout";

const AuthPage = ({ props }) => {
  if (props.pages === "login") {
    return <LoginLayout />;
  } else if (props.pages === "register") {
    return <h1>Register</h1>;
  } else {
    return <h1>Error 404 Not found</h1>;
  }
};

export default AuthPage;
