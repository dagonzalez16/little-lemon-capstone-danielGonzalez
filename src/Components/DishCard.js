function DishCard(props) {
    return (
        <>
        <article className='dish'>
            <img src={props.image} alt="Dish" />
            <div className='dishMainInfo'>
                <h3 style={{ fontSize: '30px' }}>{props.name}</h3>
                <h2 style={{ fontSize: '30px', color: '#EE9972' }}>${props.price}</h2>
            </div>
            <div className='dishSecundaryInfo'>
                <p className='dishDescription'>{props.description}</p>
                <p style={{ fontWeight: 'bold' }}>Order a delivery 🛵</p>
            </div>
        </article>
        </>
    );
}

export default DishCard;