import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop">
      {/* Top Navigation */}
      <header className="nav">
        <div className="nav-left"></div>
        <nav className="nav-center">
          <span>Store</span>
          <span>Mac</span>
          <span>iPad</span>
          <span>iPhone</span>
          <span>Watch</span>
          <span>Vision</span>
          <span>AirPods</span>
          <span>TV & Home</span>
          <span>Entertainment</span>
          <span>Accessories</span>
          <span>Support</span>
        </nav>
        <div className="nav-right">🔍 🛒</div>
      </header>

      {/* Promo Bar */}
      <div className="promo">
        Pay monthly at 0% APR when you choose to check out with Apple Card Monthly
        Installments.
        <span className="promo-link"> Learn more →</span>
      </div>

      {/* Hero */}
      <section className="hero">
        <h1>Store</h1>

        <div className="hero-right">
          <h2>The best way to buy the products you love.</h2>
          <p className="link">Connect with a Specialist ↗</p>
          <p className="link">Find an Apple Store ↗</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        {[
          "Mac",
          "iPhone",
          "iPad",
          "Apple Watch",
          "Apple Vision Pro",
          "AirPods",
          "AirTag",
          "Apple TV 4K",
          "HomePod",
        ].map((item) => (
          <div key={item} className="category">
            <div className="category-img" />
            <span>{item}</span>
          </div>
        ))}
      </section>

      {/* Latest Section */}
      <section className="latest">
        <h2>
          The latest. <span>Take a look at what’s new, right now.</span>
        </h2>

        <div className="cards">
          <div className="card dark">
            <p className="card-label">IPHONE 17 PRO</p>
            <h3>Pro. Beyond.</h3>
          </div>

          <div className="card dark">
            <p className="card-label">MACBOOK PRO 14"</p>
            <h3>Mind-blowing. Head-turning.</h3>
          </div>

          <div className="card dark">
            <p className="card-label">IPAD PRO</p>
            <h3>Thinpossible.</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
