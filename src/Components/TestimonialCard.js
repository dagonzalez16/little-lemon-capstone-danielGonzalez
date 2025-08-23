function TestimonialCard(props) {
    return(
        <>
        <article className='testimonial'>
            <div className='testimonialParent'>
                <img src={props.pfp} alt="Client" />

                <div className='testimonialChild'>
                    <h3>{props.clientName}</h3>
                    <h3>{props.rate}</h3>
                </div>
            </div>

            <p>{props.review}</p>
        </article>
        </>
    );
}

export default TestimonialCard;