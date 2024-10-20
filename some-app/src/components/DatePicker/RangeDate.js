import { memo } from "react"
import MaskedTextInput from "react-text-mask";


// let timer

export default memo(function RangeDate({changeDate}){   

    // const [inputDate, setInputDateVal] = useState('');
    // const dispatch = useDispatch();
    // const setInputData = (e) => {
     
    //     if(timer) clearTimeout(timer)
        
    //      timer = setTimeout( () => {
    //       const rangeData =  e.target.value.replace('-', '.').split('.');
    //       for (let i = 0; i < rangeData.length; i++) {

    //       }

    //         console.log(rangeData)
    //         changeDate(e.target.value)
    //      },500)
            
    // }

    return(
  
            <label className="RangeInput">
                Указать Даты
                <div className="wrapRangeInput">
                    <MaskedTextInput
                    className="DateInput RangeInput"
                    type="text"
                    mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, '-', /\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/]}
                    placeholder="__.__.__-__.__.__"
                    // onInput={setInputData}
                    />
                    <svg className='rangeCalendar opacityLow' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" fill="#002CFB"/>
                    </svg>
                </div>
            </label>
   
    )
})