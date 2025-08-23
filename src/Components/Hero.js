import restaurant_food from '../assets/restaurant_food.jpg'

function Hero() {
    return (
        <>
        <div className='hero'>
             <div className='hero-text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>
                <button className='btn-main'>Reserve a table</button>
            </div>
            <div className='hero-image'>
                <img src={restaurant_food} alt="Visual representation of the restaurant" />
            </div>
        </div>
        </>
    );
}

export default Hero;