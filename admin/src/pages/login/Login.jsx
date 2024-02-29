import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const history =useHistory();

  const {isFetching,error}=useSelector((state)=>state.user)
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    // history.push("/home");

  };

  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      <text >LOGIN</text>
      <input
        style={{ padding: 10, marginBottom: 20,marginTop:10 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
      {isFetching && <Redirect to="/"/> }
      {error && <text>...Wrong Username or Password</text>}
    </div>
  );
};

export default Login;
