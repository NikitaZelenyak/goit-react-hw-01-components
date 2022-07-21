
import { Title } from "./TitleStatistics/TitleStatistics"
import { StatList } from "./StatList/StatList"
import { Wrapper } from "./Statistics.styled"

import PropTypes from 'prop-types'

export const Statistics = ({data}) =>
{
    return (
        <Wrapper >
 <Title></Title>
 <StatList data ={data}></StatList>
</Wrapper>
    )
}

Statistics.prototype={
    data: PropTypes.arrayOf(PropTypes.object),
}