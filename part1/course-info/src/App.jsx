const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  return (
    <div>
      <p>
        {props.content[0].name} {props.content[0].exercises}
      </p>
      <p>
        {props.content[1].name} {props.content[1].exercises}
      </p>
      <p>
        {props.content[2].name} {props.content[2].exercises}
      </p>
    </div>
  );
};
const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const content = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total
        total={
          content[0].exercises + content[1].exercises + content[2].exercises
        }
      />
    </div>
  );
}


export default App;
