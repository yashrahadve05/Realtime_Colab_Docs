const Login = () => {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required style={{ display: "block", margin: "1rem 0" }} />
          <input type="password" placeholder="Password" required style={{ display: "block", margin: "1rem 0" }} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  