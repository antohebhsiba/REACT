import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Anto" passed={true} />
      <Student name="John" passed={false} />
    </div>
  );
}

export default App;
