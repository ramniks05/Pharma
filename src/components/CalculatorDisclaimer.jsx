import './CalculatorDisclaimer.css'

export default function CalculatorDisclaimer() {
  return (
    <section className="calculator-disclaimer">
      <div className="container">
        <div className="disclaimer-card">
          <div className="disclaimer-card__icon">⚠️</div>
          <h3 className="disclaimer-card__title">Important Disclaimer</h3>
          <div className="disclaimer-card__content">
            <p>
              The PTR & PTS calculator provides <strong>approximate results</strong> based on the inputs provided. 
              Actual prices may vary due to:
            </p>
            <ul className="disclaimer-list">
              <li>Market fluctuations and regulatory changes</li>
              <li>Company-specific pricing policies</li>
              <li>Regional variations in GST rates</li>
              <li>Volume discounts and special offers</li>
              <li>Terms and conditions of distribution agreements</li>
            </ul>
            <p className="disclaimer-note">
              <strong>Please note:</strong> This calculator is for reference purposes only. 
              For accurate pricing and business decisions, please consult with our sales team or a financial advisor. 
              BSR Pharma reserves the right to modify pricing without prior notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
