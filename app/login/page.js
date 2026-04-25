export default function Login() {
  return (
    <div className="box">
    <div className="login">
      <h1 style={{color:"black"}}>Please Login..!</h1>
   <h3 style={{color:"black"}}>Username:</h3>  <input type="text" placeholder="Enter your username..." /><br /><br />
    <h3 style={{color:"black"}}>Password:</h3>  <input type="password" placeholder="Enter your password..." /><br /><br />
      <button className="btn" >Login</button>
    
    </div></div>
  );
}
