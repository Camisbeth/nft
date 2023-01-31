import "./styles/global.scss";
import "./styles/variables.scss";

function App() {
  return (
    <section className="section">
      <figure className="figure">
        <img className="img" src="/images/image-equilibrium.jpg" />
        <img className="view" src="/images/icon-view.svg" />
      </figure>

      <h1 className="title">Equilibrium #3429</h1>

      <p className="paragraph">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <section className="priceAndDay">
        <p className="price">0.041 ETH</p>

        <p className="day">
          <img className="clock" src="/images/icon-clock.svg" /> 3 days left
        </p>
      </section>

      <hr className="line" />
      <section className="creator">
        <img className="imgCreator" src="/images/image-avatar.png" />
        <p className="nameCreator">
          Creation of <span className="span">Jules Wyvern</span>
        </p>
      </section>
    </section>
  );
}

export default App;
