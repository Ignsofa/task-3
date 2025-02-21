import { cards } from '../data/cards'

function Gallery() {
    return (
        <section className="gallery">
            <div className="gallery-intro-wrapper">
                <p className="gallery-intro">
                    Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽
                </p>
            </div>
            <div className="gallery-cards">
                {cards.map((card) => (
                    <article key={card.id} className="card">
                        <img src={card.image} alt={card.title} />
                        <div className="card-content">
                            <h2>{card.title}</h2>
                            <p>{card.category}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Gallery
