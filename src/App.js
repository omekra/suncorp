import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const incidents = [
    { id: 3, type: "Collision whilst driving", icon: "minor_crash" },
    { id: 4, type: "Collision whilst parking", icon: "car_crash" },
    { id: 5, type: "Glass only", icon: "sensor_door" },
    { id: 6, type: "Theft", icon: "local_police" },
    { id: 7, type: "Weather events", icon: "electric_bolt" },
    { id: 8, type: "Other", icon: "more_vert" },
  ];

  const descriptions = [
    { id: 11, text: "My vehicle was hit in the rear" },
    { id: 12, text: "I reversed into another vehicle" },
    { id: 13, text: "My vehicle hit the rear of another" },
    { id: 14, text: "A vehicle reversed into my vehicle" },
  ];

  return (
    <div className="App">
      <Header />
      <main className="container">
        <Form incidents={incidents} descriptions={descriptions} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
