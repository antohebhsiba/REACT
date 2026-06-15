function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      {props.passed ? (
        <p>Result: Pass</p>
      ) : (
        <p>Result: Fail</p>
      )}
    </div>
  );
}

export default Student;
