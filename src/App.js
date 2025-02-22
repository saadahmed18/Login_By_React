import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function Login() {
    console.log(userName, password);
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="bg-gray-500 w-[25%] mx-auto mt-[100px] p-5 flex justify-center rounded-md">
        <div className="w-full">
          <label htmlFor="userName"></label>
          <input onChange={(e) => setUserName(e.target.value)} className="block w-full m-auto rounded p-1 outline-none" type="text" autoFocus placeholder="Enter The userName" id="userName"></input>
          <label htmlFor="password"></label>
          <input onChange={(e) => setPassword(e.target.value)} className="block w-full mx-auto mt-3 rounded p-1 outline-none" typeof="password" placeholder="Enter The Password" id="password"></input>
          <input onClick={Login} className="block mx-auto mt-5 w-full bg-green-500 text-white p-3 rounded-lg cursor-pointer" type="submit" value="Login"></input>
        </div>
      </form>
    </>
  );
}

export default App;
