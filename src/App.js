import Header from "./components/header"
import Banner from "./components/banner"
import Converter from "./components/converter"
import Footer from "./components/footer"
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <main className="main">
        <Converter />
      </main>
      <Footer />
    </div>
  );
}

export default App;