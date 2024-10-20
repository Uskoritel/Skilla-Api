import { memo } from "react"

export default memo(function DateCell({date}){
    
    const time = new Date(date);
    const hmTime = time.getHours() + ':' + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes());  

    return(
        <td>
            {hmTime}
        </td>
    )
})