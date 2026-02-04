import './Terms.css'

export default function Terms() {
  return (
    <>
      <section className="terms-hero">
        <div className="container">
          <h1 className="terms-hero__title">Terms &amp; Conditions</h1>
          <p className="terms-hero__subtitle">
            Please read these terms carefully before placing an order or entering into a business partnership with BSR Pharma Private Limited.
          </p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-card">
            <h2 className="terms-card__title">Terms &amp; Conditions</h2>

            <ol className="terms-list">
              <li className="terms-item">
                <h3>No Expiry or Breakage Claims</h3>
                <p>
                  BSR Pharma Private Limited follows strict quality and packaging standards for all products. Once the goods are dispatched and delivered in good condition:
                </p>
                <ul>
                  <li>We do not entertain any claims related to expired products.</li>
                  <li>We do not accept claims for breakage, leakage, or physical damage after delivery.</li>
                </ul>
                <p>
                  Customers are requested to check all products at the time of delivery. Any issues must be reported immediately to our team before acknowledging receipt.
                </p>
              </li>

              <li className="terms-item">
                <h3>Dispatch After Payment</h3>
                <p>Products will be dispatched only after we receive the full payment in our account.</p>
              </li>

              <li className="terms-item">
                <h3>DL Requirement</h3>
                <p>
                  The second party must have a valid Drug License (DL) to purchase, stock, and sell our pharmaceutical products.
                </p>
              </li>

              <li className="terms-item">
                <h3>Order Confirmation</h3>
                <p>
                  All orders must be confirmed in writing or through verified communication channels. Once processed, orders cannot be altered or cancelled.
                </p>
              </li>

              <li className="terms-item">
                <h3>No Order Cancellation</h3>
                <p>Once an order is confirmed and processed, it cannot be cancelled or modified.</p>
              </li>

              <li className="terms-item">
                <h3>Payment Terms</h3>
                <p>
                  Payments must be made according to the agreed business terms. Delays in payment may affect future dispatches.
                </p>
              </li>

              <li className="terms-item">
                <h3>Shipping &amp; Dispatch</h3>
                <p>
                  We ensure timely dispatch of all orders. However, delivery timelines may vary based on transportation conditions and regional logistics.
                </p>
              </li>

              <li className="terms-item">
                <h3>Product Usage Responsibility</h3>
                <p>
                  All products should be used strictly as per prescribed guidelines. BSR Pharma Pvt. Ltd. is not responsible for misuse or incorrect handling.
                </p>
              </li>

              <li className="terms-item">
                <h3>Pricing &amp; GST</h3>
                <p>
                  All prices are subject to taxation as per the prevailing GST rates and company policies. Price changes may occur without prior notice due to market conditions.
                </p>
              </li>

              <li className="terms-item">
                <h3>Legal Compliance</h3>
                <p>
                  Partners must follow all regulatory and legal guidelines while promoting, marketing, or selling our products.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

