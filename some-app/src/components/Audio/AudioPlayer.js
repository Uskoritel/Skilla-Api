import { useEffect, useState } from "react"
import FetchService from "../../Api/FetchService";
import useFetchRecord from "../../Hooks/useFetchRecord";
import { memo } from "react";

let audio;

export default memo(function AudioPlayer({duration, partner, record}){

    const playAudio =  () => {
            fetchRecord(partner, record);
        }


        const activePlayerFunc = () => {
            audio.onloadedmetadata = () => {
                setAudioDuration(Math.ceil(audio.duration))
            }

            audio.ontimeupdate = () => {
                setPlayerTime(Math.ceil(audio.currentTime))
            }
        }



    const changeCurrentTime = (e) => {
        audio.currentTime = Number(e.target.value)
        setPlayerTime(Number(e.target.value))
    }

    const [audioDuration, setAudioDuration] = useState(duration);
    const [playerTime, setPlayerTime] = useState(0)
    const [play, setPlay] = useState(false);
    const [recordDate, setRecordDate] = useState('');
    const fetchRecord = useFetchRecord( async () => {
            if(record !== recordDate){
                const response = await FetchService.getRecord(partner, record)
                const songSrc = new Blob([response], { type: 'audio/mp3' })
                audio.pause();
            if(songSrc.size > 0){
                setRecordDate(record)
                audio.src = URL.createObjectURL(songSrc);
            }
          }
            if(play){
                audio.pause();
                setPlay(false)
            } else {
                audio.play();
                setPlay(true)
            }

    })

    //Здесь тонна колхоза, как и всюду, стыдно, да, времени нет 

    useEffect( () => {

        if (!audio) {
            audio = new Audio();
        } else {
            activePlayerFunc()
        }


    }, [play])


    return(
        <div className="audio">
             <div className="audioElements">
                <div>
                    {duration}
                </div>
                <div onClick={() => playAudio()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="white"/>
                     {!play ? 
                        <path d="M9.28742 7.06938C9.3761 7.02316 9.47535 7 9.57475 7C9.67389 7 9.77311 7.02316 9.86218 7.06938L16.7125 11.5519C16.8901 11.6442 17 11.8152 17 12.0001C17 12.1849 16.8904 12.3559 16.7125 12.4481L9.86218 16.9308C9.68439 17.0231 9.46523 17.0231 9.28757 16.9308C9.10976 16.8382 9 16.6672 9 16.4825V7.51755C9 7.33278 9.10958 7.16182 9.28742 7.06938Z" fill="#002CFB"/>
                        :
                        <path d="M8 16H10.6667V8H8V16ZM13.3333 8V16H16V8H13.3333Z" fill="#002CFB"/>
                    }
                        </svg>
                 
                </div>
                <div>
                    <input className="playerRoad" type="range" value={playerTime} min={0} max={audioDuration} onChange={changeCurrentTime}/>
                </div>
                <div>
                    <svg className="playerBtn" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z" fill="#002CFB"/>
                    </svg>
                </div>
                <div>
                    <svg className="playerBtn" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#002CFB"/>
                    </svg>
                </div>
             </div>
        </div>
    )
})