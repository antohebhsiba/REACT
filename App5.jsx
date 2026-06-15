function App() {
  const students = [
    { id: 1, name: "Anto" },
    { id: 2, name: "John" },
    { id: 3, name: "Priya" },
  ];

  return (
    <div>
      <h1>Student List</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
