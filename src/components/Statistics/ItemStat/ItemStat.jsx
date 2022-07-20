
import PropTypes from 'prop-types'


import { Item, Span } from "./ItemStat.styled"

export const ItemStat = ({label,percentage}) => {
    return (
          <Item>
      <Span >{label}</Span>
      <Span >{percentage}%</Span>
    </Item>
    )
}

ItemStat.prototype = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}