import { memo } from "react"
import AudioPlayer from "../Audio/AudioPlayer";

export default memo(function DurationCell({duration, partner, record}){

    const time = duration > 0 ? duration : '';

    return(
        <td>
            <div className={record ?  'duration' : ''}>{time}</div>
            {record &&
                <AudioPlayer duration={duration} partner={partner} record={record}/>
            }                  
        </td>
    )
})