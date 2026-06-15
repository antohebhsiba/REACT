function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default Student;