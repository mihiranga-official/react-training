import "./index.css";

function App() {
  // const firstName = "Janith";
  // const middleName = "Mihiranga";
  // const surName = "Gunawardana";

  // const getFullName = (f, m, s) => {
  //   return `${f} ${m} ${s}`;
  // };
  // const arr = ["Apple", "Grapes", "Oranages"];
  // const lang = (
  //   <ul>
  //     <li>React </li>
  //     <li>Vue</li>
  //     <li>Vanila</li>
  //     <li>Java</li>
  //   </ul>
  // );
  // const objects={
  //   fname:"Shashika",
  //   age:"23"
  // }
  function Greetings(props) {
    return (
      <h1>This is a props used by {props.Name} he is a Software engineer</h1>
    );
  }
  function Another(props) {
    return (
      <h2>
        He is Trying to find s job related to {props.Job} in Dubai in last 1
        month Periods{" "}
      </h2>
    );
  }

  function Third(props) {
    return (
      <h3>
        Sri lanka is a developing country and we have lots of jobs {props.jobs}
      </h3>
    );
  }

  return (
    <>
      <div className="h1">
        {/* <h1>
          Hi My Name is {getFullName("Janith", "Mihiranga", "Gunawardana")}
        </h1>
        <p>I would like to eat {arr[1]}</p>
        <p>Good Programming Langauages are </p>
        <span>{lang}</span>
        <h2>Her name is {objects.fname} and her age is {objects.age} </h2> */}
        <Greetings Name="Janith" />
        <Another Job="Software engineer" />
        <Third jobs="Available"/>
      </div>
    </>
  );
}

export default App;
