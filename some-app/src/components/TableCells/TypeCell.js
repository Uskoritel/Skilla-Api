import { memo } from "react"
import callIn from '../assets/CallIcons/callIn.png' 
import callMissing from  '../assets/CallIcons/callMissing.png' 
import callNone from  '../assets/CallIcons/callNone.png'  
import callOut from  '../assets/CallIcons/callOut.png'  


const inCall = {
    'Дозвонился' : callIn,
    'Не дозвонился' : callMissing,
}

const outCall = {
    'Дозвонился' : callOut,
    'Не дозвонился' : callNone,
}

export default memo(function TypeCell({type, status}){

    const call = type === 1 ? inCall[status] : outCall[status];
   
    return(
        <td>
            <img src={call} alt="some txt"/>
        </td>
    )
})