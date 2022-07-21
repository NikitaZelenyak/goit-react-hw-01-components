 import { ItemStat } from "../ItemStat/ItemStat"

import { List } from "./StatList.styled"
 
import PropTypes from 'prop-types'

export const StatList = ({data}) => {
   
    return (
        <List>
            {data.map(elem => (
            <ItemStat
                key ={elem.id}
                label={elem.label}
                percentage={elem.percentage}
            ></ItemStat>
            ))}
          
  </List>
    )
        

}


StatList.prototype={
    data: PropTypes.arrayOf(PropTypes.shape({
        key:PropTypes.string.isRequired
    })),
}