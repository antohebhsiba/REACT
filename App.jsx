import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <Student
        name="Anto"
        age={19}
        department="CSE"
      />

      <Student
        name="Anu"
        age={20}
        department="IT"
      />
    </div>
  );
}

export default App;