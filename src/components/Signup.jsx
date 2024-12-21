const Signup = () => {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" required style={{ display: "block", margin: "1rem 0" }} />
          <input type="email" placeholder="Email" required style={{ display: "block", margin: "1rem 0" }} />
          <input type="password" placeholder="Password" required style={{ display: "block", margin: "1rem 0" }} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  