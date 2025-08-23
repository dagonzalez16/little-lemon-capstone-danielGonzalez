import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import DishCard from './Components/DishCard';
import TestimonialCard from './Components/TestimonialCard';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header /> {/*This component already returns <header>*/}
    <main>
      <Hero />
      <section className='dishesSection'>

      <div className='dishesHeader'>
        <h2>Specials of the week!</h2>
        <button className='btn-main'>Online menu</button>
      </div>

      <div className='dishesList'>
        <DishCard image='/dishes/bruchetta.png'
                  name="Bruchetta"
                  price="20"
                  description="Grilled bread topped with fresh tomatoes,
                  garlic, basil, and a drizzle of olive oil."/> {/*Each one returns <article>*/}
        <DishCard image='/dishes/greek_salad.jpg'
                  name="Greek Salad"
                  price="15"
                  description="A refreshing mix of tomatoes, cucumbers, onions, olives,
                  and feta cheese with a light olive oil dressing."/>
        <DishCard image='/dishes/lemon_dessert.jpg'
                  name="Lemon dessert"
                  price="17"
                  description="A tangy and sweet lemon-flavored treat, often
                  creamy and topped with a hint of zest."/>
      </div>
      </section>

      <section className='testimonialSection'>
        <h2>Testimonials</h2>
        <div className='testimonialsList'>
          <TestimonialCard
            rate="⭐⭐⭐⭐"
            pfp="/people/emily_carter.jpg"
            clientName="Emily Carter"
            review='"The Greek salad was so fresh and delicious, I could eat it every day!"'
          /> {/*Each one returns <article>*/}

          <TestimonialCard
            rate="⭐⭐⭐⭐⭐"
            pfp="/people/olivia_brooks.jpg"
            clientName="Olivia Brooks"
            review='"Amazing service and the Lemon Dessert is a must-try, sweet and refreshing."'
          />

          <TestimonialCard
            rate="⭐⭐⭐⭐⭐"
            pfp="/people/james_mitchell.jpg"
            clientName="James Mitchell"
            review='"Best Mediterranean food I’ve had outside of Europe. Truly authentic."'
          />

          <TestimonialCard
            rate="⭐⭐⭐⭐"
            pfp="/people/ethan_walker.jpg"
            clientName="Ethan Walker"
            review='"The Bruschetta was tasty, though I wish the portion was a little bigger."'
          />
        </div>
      </section>
    </main>
    <Footer /> {/*This component already returns <footer>*/}
    </>
  );
}

export default App;