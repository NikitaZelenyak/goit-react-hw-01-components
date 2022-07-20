 import { ItemStat } from "../ItemStat/ItemStat"
import data from "../../../components/data.json"
 import { List } from "./StatList.styled"
export const StatList = () => {
   
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
