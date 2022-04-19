import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div className='container'>
      {" "}
      <Header />
      <main className='main'>
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}
