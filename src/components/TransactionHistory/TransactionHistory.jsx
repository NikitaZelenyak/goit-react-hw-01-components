import { Table,OperationName } from "./TransactionHistory.styled"
import { InfoTransactionItem } from "./InfoTransactionItem/InfoTransactionItem"


import PropTypes from 'prop-types'


export const TransactionHistory = ({transactions}) => {
    return (
        <Table>
  <OperationName>
    <tr>
   <th>Type</th>
 <th>Amount</th>
  <th>Currency</th>
 </tr>
    </OperationName>
            <tbody>
                {transactions.map(transaction => {
                    return (
                        <InfoTransactionItem
                            key={transaction.id}
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}

                        >
                        </InfoTransactionItem>
                    )
                })}
                
  </tbody>

</Table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
          key: PropTypes.string.isRequired,
      }))
}