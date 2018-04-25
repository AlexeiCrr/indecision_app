const user = {
  age: 23,
  location: "Chisinau",
  name: "Alex"
};

const app = {
  title: "Indecision App",
  subtitle: "I want to be a react dev",
  options: ["ha", "haadfasdfd", "afdffdha", "affdha", "hadfdfa"]
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = e => {
  app.options.length = 0;
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length) * 1;
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle.length > 0 && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0
          ? "Here are your options"
          : "There are no options"}
      </p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should i do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

render();
