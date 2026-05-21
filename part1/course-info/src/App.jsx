const Header = ({ course }) => {
  console.log(course);
  return <h1>{course}</h1>;
};
const Content = ({ parts }) => {
  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
    </div>
  );
};
const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
