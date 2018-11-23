const jsContainer = document.getElementById("jsElement");
const reactContainer = document.getElementById("reactElement");
let counter = 0;

const update = () => {
  counter++;
  jsContainer.innerHTML = `
    <div class="counter-border">
      JavaScript
      <input />
      <h1>${counter}</h1>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      { className: "counter-border" },
      "React ",
      React.createElement("input"),
      React.createElement("h1", null, counter)
    ),
    reactContainer
  );
};

setInterval(update, 1000);
