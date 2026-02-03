import './CalculatorBenefits.css'

export default function CalculatorBenefits() {
  return (
    <section className="calculator-benefits">
      <div className="container">
        <div className="calculator-benefits__header">
          <span className="calculator-benefits__badge">Why Use Our Calculator</span>
          <h2 className="calculator-benefits__title">Smart Pricing Made Simple</h2>
          <p className="calculator-benefits__subtitle">
            Our PTR & PTS calculator helps pharma partners make informed business decisions
          </p>
        </div>

        <div className="calculator-benefits__grid">
          <div className="benefit-card">
            <div className="benefit-card__icon">💰</div>
            <h3 className="benefit-card__title">Easy Pharma Pricing Calculation</h3>
            <p className="benefit-card__desc">
              Instantly calculate PTR and PTS with accurate GST and margin calculations. No complex formulas or manual errors.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-card__icon">📊</div>
            <h3 className="benefit-card__title">Retail & Stockist Margin Clarity</h3>
            <p className="benefit-card__desc">
              Understand exactly how margins are distributed across the supply chain. See clear breakdowns of retailer and stockist margins.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-card__icon">🎯</div>
            <h3 className="benefit-card__title">Decision Support for Franchise</h3>
            <p className="benefit-card__desc">
              Make informed decisions about franchise and distribution partnerships with accurate pricing insights.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-card__icon">🔗</div>
            <h3 className="benefit-card__title">Visual Supply Chain Margins</h3>
            <p className="benefit-card__desc">
              Get a visual understanding of how pricing flows through the supply chain from manufacturer to retailer.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-card__icon">📈</div>
            <h3 className="benefit-card__title">GST Impact on Pricing</h3>
            <p className="benefit-card__desc">
              See exactly how GST affects your final pricing and understand the tax implications on your margins.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-card__icon">⚡</div>
            <h3 className="benefit-card__title">Instant Results</h3>
            <p className="benefit-card__desc">
              Get instant calculations and share results directly via WhatsApp for quick business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
