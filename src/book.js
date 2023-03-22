const Person = (props) => {
  return <h4>{props.person}</h4>;
};

const Title = (props) => {
  return <h2>{props.title}</h2>;
};

const Image = (props) => {
  return <img src={props.img} alt="Interesting Facts For Curious Minds" />;
};

export const Book = (props) => {
  return (
    <article className="book">
      <Image img={props.img} />
      <Person person={props.person} />
      <Title title={props.title} />
      <span className="number">{`# ${props.number + 1}`}</span>;
    </article>
  );
};
