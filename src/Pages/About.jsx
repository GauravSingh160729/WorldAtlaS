import CountryFacts from "../api/CountryData.json";

const About = () => {
  return (
    <section>
      <div className="UpperDiv">
        <h2 className="abouth2">Here The Interesting Facts</h2>
        <br />
        We'Re Proud Of
      </div>

      <div className="cardsContainer">

        {CountryFacts.map((country) => {
          const{id,Country,popultion,capital,interestingFact}=country
          return             <div className="Cards" key={id}>
            <h2 className="CardTitle">{Country}</h2>
            <p>
              <span>Capital:</span>{capital}
            </p>
            <p>
              <span>Population:</span>{popultion}
            </p>
            <p>
              <span>InterestingFact:</span>{interestingFact}
            </p>
          </div>;
        })}
      </div>
    </section>
  );
};

export default About;
