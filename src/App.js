import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import DishCard from './Components/DishCard';
import TestimonialCard from './Components/TestimonialCard';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header /> {/*This component already returns <header>*/}
    <main>
      <Hero />
      <section className='dishesSection'>
        <h2>Specials</h2>
        <div className='dishesList'>
          <DishCard /> {/*Each one returns <article>*/}
          <DishCard />
          <DishCard />
        </div>
      </section>
      <section className='testimonialSection'>
        <h2>Testimonials</h2>
        <div className='testimonialsList'>
          <TestimonialCard /> {/*Each one returns <article>*/}
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      <section className='aboutSection'>
        <About />
      </section>
    </main>
    <Footer /> {/*This component already returns <footer>*/}
    </>
  );
}

export default App;