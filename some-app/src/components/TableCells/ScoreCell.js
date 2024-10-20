import { memo, useEffect, useState } from "react"

export default memo(function ScoreCell({score}){
    const [scoreVal, setScore] = useState('')

    function randomScore(){
        setScore(Math.round(Math.random() * 7))
    }

    useEffect( () => {
        randomScore()
    },[])

    return(
        <td>
            {scoreVal === 1 && <div className="badScore flexBlock">Плохо</div>}
            {scoreVal === 2 && <div className="goodScore flexBlock">Хорошо</div>}
            {scoreVal === 3 && <div className="perfectScore flexBlock">Отлично</div>}
        </td>
    )
})