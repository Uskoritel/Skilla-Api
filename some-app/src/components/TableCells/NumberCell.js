import { memo } from "react"

export default memo(function NumberCell({telNumber}){
    return(
        <td>
            {telNumber}
        </td>
    )
})