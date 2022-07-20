import PropTypes from 'prop-types'

import { TransactionItem, InfoText } from "./InfoTransactionItem.stuled"

export const InfoTransactionItem = ({type,amount,currency}) => {
    return (
 
    <TransactionItem>
      <InfoText>{type}</InfoText>
      <InfoText>{amount}</InfoText>
      <InfoText>{currency}</InfoText>
    </TransactionItem>


    )
}

InfoTransactionItem.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}
