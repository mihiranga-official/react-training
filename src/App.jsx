import "./index.css";

function App() {
  const firstName = "Janith";
  const middleName = "Mihiranga";
  const surName = "Gunawardana";

  const getFullName = (f, m, s) => {
    return `${f} ${m} ${s}`;
  };
  const arr=["Apple","Grapes","Oranages"]
  return (
    <>
      <div className="h1">
        <h1>Hi My Name is {getFullName("Janith", "Mihiranga", "Gunawardana")}</h1>
        <p>I would like to eat {arr[1]}</p>
      </div>
    </>
  );
}

export default App;
