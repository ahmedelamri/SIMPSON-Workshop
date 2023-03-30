import Avatar from "./Avatar";

function App() {
  return (
    <>
      <Avatar
        image={Bart.image}
        firstName={Bart.firstName}
        lastName={Bart.lastName}
      />
      <Avatar
        image={Homer.image}
        firstName={Homer.firstName}
        lastName={Homer.lastName}
      />
    </>
  );
}

const Bart = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson",
};

const Homer = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName: "Simpson",
};

export default App;
