const Section = (props) => {
  return (
    <div className="site">
      <h2>{props.elem.category}</h2>
      <article className="carrousel">
        {props.elem.images.map((poster) => {
          return (
            <div className="poster">
              <img src={poster} alt="movieposter" />
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Section;
