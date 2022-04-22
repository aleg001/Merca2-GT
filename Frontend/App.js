const App = () => {
  const [isLogedIn, setIsLogedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [plan, setPlan] = React.useState("");

  return (
    // <React.Fragment>
    // 	{isLogedIn ? <Perfiles setUsername={username}/>:<UserPage setIsLogedIn={setIsLogedIn} setUsername={setUsername}/>}
    // </React.Fragment>
    <h1>Hola</h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
