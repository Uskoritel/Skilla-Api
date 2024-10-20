import { memo } from "react"
import TypeCell from "../TableCells/TypeCell"
import PersonCell from "../TableCells/PersonCell"
import DateCell from "../TableCells/DateCell"
import NumberCell from '../TableCells/NumberCell'
import SourceCell from "../TableCells/SourceCell"
import ScoreCell from "../TableCells/ScoreCell"
import DurationCell from "../TableCells/DurationCell"

export default  memo(function TableData({items}){
    return(
        items.map( (elem, index) => {
            return(
                    <tr key={index}>
                        <TypeCell type={elem.in_out} status={elem.status}/>
                        <DateCell date={elem.date}/>
                        <PersonCell avatar={elem.person_avatar}/>
                        <NumberCell telNumber={elem.from_number}/>
                        <SourceCell source={elem.source}/>
                        <ScoreCell score={elem.score}/>
                        <DurationCell duration={elem.time} partner={elem.partner_data.id} record={elem.record}/>
                    </tr>
                )
            })
        )
    
})