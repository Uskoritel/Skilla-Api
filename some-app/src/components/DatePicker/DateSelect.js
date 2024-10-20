import { useState } from "react";
import { useEffect, memo } from "react";
import RangeDate from "./RangeDate";



export default memo(function DateSelect({setDate}){
 
    const [timeValue, setTimeValue] = useState({period: 'Дня', count: 3, multiplier: 1});
    const [dropDown, setDropDown] = useState(false)


    function subtractData(days, multiplier) {
        const date = new Date();
        const subtraction = days * multiplier
        date.setDate(date.getDate() - subtraction);
      
        return date;
      }

    const changeDate = (e) => {
        if(e.target.classList.contains('More')){
            setTimeValue({...timeValue, count: timeValue.count + 1})
            setDate(subtractData(timeValue.count, timeValue.multiplier))
        }
        if(timeValue.count === 0) return
        if(e.target.classList.contains('Less')){
            setTimeValue({...timeValue, count: timeValue.count - 1})
            setDate(subtractData(timeValue.count, timeValue.multiplier))
        }
        
       

    }



    const chooseDate = (e) => {
        switch(e.target.className){
            case 'Days':
                setTimeValue({period: 'Дня', count: 3, multiplier: 1})
            break
            case 'Weeks':
                setTimeValue({period: 'Неделя', count: 0, multiplier: 7})
            break
            case 'Month':
                setTimeValue({period: 'Месяц', count: 0, multiplier: 31})
            break
            case 'Years':
                setTimeValue({period: 'Год', count: 0, multiplier: 365})
            break
       
            default:
            break
        }
    }

    useEffect(() => {

        const closeMenu = (e) => {
            if(!e.target.closest('.period_wrap'))
            setDropDown(false);
        }
        
        if(dropDown) document.addEventListener('click', closeMenu) 
        
        return () => document.removeEventListener('click', closeMenu);

      }, [dropDown]);

    return(

        <div className="period_wrap"  onClick={changeDate}>
            <div className="ArrowWrap"><i className="arrow left Less"></i></div>
                <div className="periodDropDown" onClick={ () => setDropDown('show')}>
                    <svg className='calendar' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" fill="#002CFB"/>
                    </svg>
                    <div className={`${timeValue.multiplier === 1 ? 'Days' : ''}`}>
                    {timeValue.count > 0 ? timeValue.count : ''}
                    {' ' + timeValue.period}
                    </div>
                    {dropDown && 
                        <div className="DropDownMenu" onClick={chooseDate}>
                            <div className="Days">3 дня</div>
                            <div className="Weeks">Неделя</div>
                            <div className="Month">Месяц</div>
                            <div className="Years">Год</div>
                            <RangeDate changeDate={setDate}/>
                        </div>
                    }      
                </div> 
            <div className="ArrowWrap"><i className="arrow right More"></i></div>
        </div>
      
    )
})