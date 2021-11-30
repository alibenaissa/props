import "./App.css";
import ali from "./images/ali.jpg";
import Component from "./profile/Component";
function App() {
  return (
    <div className="App">
      <Component
        name="Ali benaissa "
        diplome="Bac eco "
        profession="full stack developer"
      >
        <img
          src={ali}
          alt="this is my face"
          style={{
            margin: "0 auto",
            display: "block",
            height: "300px",
            borderRadius: "10%",
          }}
        />
      </Component>
    </div>
  );
}

export default App;
