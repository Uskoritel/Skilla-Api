import { memo } from "react"

export default memo(function PersonCell({avatar}){
    return(
        <td>
            {avatar &&
              <img src={avatar} alt="some txt" width={'32px'} height={'32px'} style={{'borderRadius': '20px'}}/>
             }
        </td>
    )
})