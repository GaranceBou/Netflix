import data from "../assets/data.json";

const Section = () => {
  return (
    <div className="site">
      {data.map((elem) => {
        return (
          <div className="section">
            <h2>{elem.category}</h2>
            <article className="carrousel">
              {elem.images.map((poster) => {
                return (
                  <div className="poster">
                    <img src={poster} alt="movieposter" />
                  </div>
                );
              })}
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
