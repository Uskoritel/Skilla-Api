import { memo } from "react"

export default memo(function SourceCell({source}){
    return(
        <td>
            {source}
        </td>
    )
})