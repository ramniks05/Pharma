import { useState } from 'react'
import { company } from '../data/products'
import './PTRPTSCalculator.css'

const whatsappBase = `https://wa.me/${company.whatsapp}`

function calculatePTRPTS(mrp, gstRate, retailerMargin, stockistMargin) {
  // Convert percentages to decimals
  const gst = gstRate / 100
  const retailer = retailerMargin / 100
  const stockist = stockistMargin / 100

  // Standard pharma formula:
  // PTR = MRP / (1 + Retailer Margin%) / (1 + GST%)
  // PTS = PTR / (1 + Stockist Margin%) / (1 + GST%)
  
  // Calculate PTR (Price To Retailer)
  // First remove retailer margin, then remove GST
  const ptr = mrp / (1 + retailer) / (1 + gst)

  // Calculate PTS (Price To Stockist)
  // Remove stockist margin and GST from PTR
  const pts = ptr / (1 + stockist) / (1 + gst)

  // Calculate breakdown amounts
  const mrpAfterGST = mrp / (1 + gst)
  const gstAmount = mrp - mrpAfterGST
  const retailerMarginAmount = mrpAfterGST - ptr
  const stockistMarginAmount = ptr - pts

  return {
    ptr: parseFloat(ptr.toFixed(2)),
    pts: parseFloat(pts.toFixed(2)),
    gstAmount: parseFloat(gstAmount.toFixed(2)),
    retailerMarginAmount: parseFloat(retailerMarginAmount.toFixed(2)),
    stockistMarginAmount: parseFloat(stockistMarginAmount.toFixed(2)),
    mrp: parseFloat(mrp.toFixed(2)),
  }
}

function buildCalculatorWhatsAppMessage(data, results) {
  const lines = [
    `*PTR & PTS Calculator Results*`,
    '',
    `*Input Details:*`,
    `MRP: ₹${data.mrp}`,
    `GST Rate: ${data.gstRate}%`,
    `Retailer Margin: ${data.retailerMargin}%`,
    `Stockist Margin: ${data.stockistMargin}%`,
    '',
    `*Calculated Results:*`,
    `PTR (Price To Retailer): ₹${results.ptr}`,
    `PTS (Price To Stockist): ₹${results.pts}`,
    '',
    `*Margin Breakdown:*`,
    `GST Amount: ₹${results.gstAmount}`,
    `Retailer Margin: ₹${results.retailerMarginAmount}`,
    `Stockist Margin: ₹${results.stockistMarginAmount}`,
    '',
    `*Contact Details:*`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || '—'}`,
    `City: ${data.city || '—'}`,
  ]
  return encodeURIComponent(lines.join('\n'))
}

export default function PTRPTSCalculator() {
  const [inputs, setInputs] = useState({
    mrp: '',
    gstRate: '12',
    retailerMargin: '',
    stockistMargin: '',
  })

  const [results, setResults] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    const mrp = parseFloat(inputs.mrp)
    const gstRate = parseFloat(inputs.gstRate)
    const retailerMargin = parseFloat(inputs.retailerMargin)
    const stockistMargin = parseFloat(inputs.stockistMargin)

    if (!mrp || !retailerMargin || !stockistMargin) {
      alert('Please fill all required fields')
      return
    }

    if (mrp <= 0 || retailerMargin < 0 || stockistMargin < 0 || gstRate < 0) {
      alert('Please enter valid positive values')
      return
    }

    const calculated = calculatePTRPTS(mrp, gstRate, retailerMargin, stockistMargin)
    setResults(calculated)
    setShowForm(true)
  }

  const handleSendToWhatsApp = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      alert('Please fill Name and Phone fields')
      return
    }

    const text = buildCalculatorWhatsAppMessage(
      { ...inputs, ...formData },
      results
    )
    const url = `${whatsappBase}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleReset = () => {
    setInputs({
      mrp: '',
      gstRate: '12',
      retailerMargin: '',
      stockistMargin: '',
    })
    setResults(null)
    setShowForm(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
    })
  }

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calculator-header">
          <h2 className="calculator-title">PTR & PTS Calculator</h2>
          <p className="calculator-subtitle">
            Calculate Price To Retailer (PTR) and Price To Stockist (PTS) with GST and margin breakdown
          </p>
        </div>

        <div className="calculator-wrapper">
          <div className="calculator-form-card">
            <form className="calculator-form" onSubmit={handleCalculate}>
              <div className="calculator-form__row">
                <div className="calculator-form__group">
                  <label className="calculator-form__label">
                    MRP (Maximum Retail Price) <span className="required">*</span>
                  </label>
                  <div className="calculator-form__input-wrapper">
                    <span className="calculator-form__currency">₹</span>
                    <input
                      type="number"
                      name="mrp"
                      value={inputs.mrp}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="0.01"
                      className="calculator-form__input"
                      placeholder="Enter MRP"
                    />
                  </div>
                </div>

                <div className="calculator-form__group">
                  <label className="calculator-form__label">
                    GST Rate <span className="required">*</span>
                  </label>
                  <select
                    name="gstRate"
                    value={inputs.gstRate}
                    onChange={handleInputChange}
                    required
                    className="calculator-form__input"
                  >
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>
              </div>

              <div className="calculator-form__row">
                <div className="calculator-form__group">
                  <label className="calculator-form__label">
                    Retailer Margin (%) <span className="required">*</span>
                  </label>
                  <div className="calculator-form__input-wrapper">
                    <input
                      type="number"
                      name="retailerMargin"
                      value={inputs.retailerMargin}
                      onChange={handleInputChange}
                      required
                      min="0"
                      max="100"
                      step="0.01"
                      className="calculator-form__input"
                      placeholder="e.g., 20"
                    />
                    <span className="calculator-form__suffix">%</span>
                  </div>
                </div>

                <div className="calculator-form__group">
                  <label className="calculator-form__label">
                    Stockist Margin (%) <span className="required">*</span>
                  </label>
                  <div className="calculator-form__input-wrapper">
                    <input
                      type="number"
                      name="stockistMargin"
                      value={inputs.stockistMargin}
                      onChange={handleInputChange}
                      required
                      min="0"
                      max="100"
                      step="0.01"
                      className="calculator-form__input"
                      placeholder="e.g., 10"
                    />
                    <span className="calculator-form__suffix">%</span>
                  </div>
                </div>
              </div>

              <div className="calculator-form__actions">
                <button type="submit" className="btn btn--primary btn--large">
                  Calculate PTR & PTS
                </button>
                {results && (
                  <button type="button" className="btn btn--outline" onClick={handleReset}>
                    Reset
                  </button>
                )}
              </div>
            </form>
          </div>

          {results && (
            <div className="calculator-results">
              <div className="calculator-results__header">
                <h3>Calculation Results</h3>
              </div>
              <div className="calculator-results__grid">
                <div className="result-card result-card--primary">
                  <div className="result-card__label">PTR</div>
                  <div className="result-card__value">₹{results.ptr}</div>
                  <div className="result-card__desc">Price To Retailer</div>
                </div>
                <div className="result-card result-card--accent">
                  <div className="result-card__label">PTS</div>
                  <div className="result-card__value">₹{results.pts}</div>
                  <div className="result-card__desc">Price To Stockist</div>
                </div>
              </div>

              <div className="calculator-results__breakdown">
                <h4>Margin Breakdown</h4>
                <div className="breakdown-list">
                  <div className="breakdown-item">
                    <span className="breakdown-item__label">MRP</span>
                    <span className="breakdown-item__value">₹{results.mrp}</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="breakdown-item__label">GST Amount ({inputs.gstRate}%)</span>
                    <span className="breakdown-item__value">₹{results.gstAmount}</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="breakdown-item__label">Retailer Margin ({inputs.retailerMargin}%)</span>
                    <span className="breakdown-item__value">₹{results.retailerMarginAmount}</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="breakdown-item__label">Stockist Margin ({inputs.stockistMargin}%)</span>
                    <span className="breakdown-item__value">₹{results.stockistMarginAmount}</span>
                  </div>
                </div>
              </div>

              {showForm && (
                <div className="calculator-contact-form">
                  <h4>Get Results on WhatsApp</h4>
                  <p className="calculator-contact-form__desc">
                    Fill your details to receive these calculations on WhatsApp
                  </p>
                  <form onSubmit={handleSendToWhatsApp}>
                    <div className="calculator-contact-form__row">
                      <div className="calculator-contact-form__group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          className="calculator-contact-form__input"
                          placeholder="Your Name *"
                        />
                      </div>
                      <div className="calculator-contact-form__group">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          required
                          className="calculator-contact-form__input"
                          placeholder="Phone Number *"
                        />
                      </div>
                    </div>
                    <div className="calculator-contact-form__row">
                      <div className="calculator-contact-form__group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="calculator-contact-form__input"
                          placeholder="Email (Optional)"
                        />
                      </div>
                      <div className="calculator-contact-form__group">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          className="calculator-contact-form__input"
                          placeholder="City (Optional)"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn--whatsapp btn--large">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Send to WhatsApp
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
