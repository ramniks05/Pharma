import PTRPTSCalculator from '../components/PTRPTSCalculator'
import CalculatorBenefits from '../components/CalculatorBenefits'
import CalculatorDisclaimer from '../components/CalculatorDisclaimer'
import './Calculator.css'

export default function Calculator() {
  return (
    <>
      <PTRPTSCalculator />
      <CalculatorBenefits />
      <CalculatorDisclaimer />
    </>
  )
}
