import './App.css';
import { memo, useEffect, useMemo, useState } from 'react';
import FilterSelect from './components/FilterSelect/FilterSelect.js';
import TableData from './components/TableData/TableData.js';
import DateSelect from './components/DatePicker/DateSelect.js';
import useFetchData from './Hooks/useFetchData.js';
import FetchService from './Api/FetchService.js';


export default memo(function App() {

  const [items, setItem] = useState([]);
  const [sortDate, setSortDate] = useState({type : 'date', order: 'DESC'});
  const [sortDuration, setSortDuration] = useState({type : 'duration', order: 'DESC'});
  const [filter, setFilter] = useState('');
  const [dateFilter, setDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState({type: 'date', order: 'ASC'})

  const [fetchCalls, loader]= useFetchData( async () => {
     const items = await FetchService.getCalls(selectedFilter.type, selectedFilter.order);
     setItem(items);
  } )


    const condition = (filter, setFilter) => {
      if(filter.order === 'DESC'){
        setFilter({...filter, order: 'ASC'});
      } else {
        setFilter({...filter, order: 'DESC'});
      }
      setSelectedFilter({type: filter.type, order: filter.order})

    }

  const chooseSort = (e) => {

    if(e.target.classList.contains('Time')){
      condition(sortDate, setSortDate);
    }
    if(e.target.classList.contains('Duration')){
      condition(sortDuration, setSortDuration);
    }
    
  }

  useEffect( () => {

       
      fetchCalls(selectedFilter.type, selectedFilter.order);
      const date = new Date();
      setDate(date.setDate(date.getDate() - 3));

  }, [selectedFilter]);



  const filterItems = useMemo(() => {
        
    if(filter){
      const condition = filter === "in" ? 1 : 0;
      return items.filter( (elem) =>  { return elem.in_out === condition && new Date(elem.date).getTime() > new Date(dateFilter).getTime()} );
    } else {
      return items.filter( (elem) =>  { return new Date(elem.date) > new Date(dateFilter)} );
    }
    

  }, [filter, items, dateFilter]);

  

  return (
    <div className="">
        <div className='tableWrap'>
          <div className='tableFilters'>
            <div className='filterBlock'>
              <FilterSelect 
                    value={filter}
                    change={setFilter}
                    defaultVal={'Все типы'}
                    option={[
                      {value: 'in', name: 'Входящие'},
                      {value: 'out', name: 'Исходящие'}
                    ]}
              />    
              {filter ? <div className='dropFilter' onClick={ () => {setFilter('')}}>Сбросить фильтры 
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.75 0.88125L7.86875 0L4.375 3.49375L0.88125 0L0 0.88125L3.49375 4.375L0 7.86875L0.88125 8.75L4.375 5.25625L7.86875 8.75L8.75 7.86875L5.25625 4.375L8.75 0.88125Z" fill="#ADBFDF"/>
                </svg></div> : ''}
            </div>
            <div>
             <DateSelect setDate={setDate}/>
            </div>
          </div>
          <div className='tableContainer'>
          {loader && <div>ZAGRUZKA</div>}
            <table className='callTable'>
              <thead>
                <tr onClick={chooseSort}>
                  <td>Тип</td>
                  <td className='Time'>Время <i className={`arrow ${sortDate.order === "DESC" ? 'bottom' : 'top'}`}></i></td>
                  <td className='Person'>Сотрудник</td>
                  <td>Звонок</td>
                  <td>Источник</td>
                  <td>Оценка</td>
                  <td className='Duration'>Длительность <i className={`arrow ${sortDuration.order === "DESC" ? 'bottom' : 'top'}`}></i></td>
                </tr>
              </thead>
              <tbody>
                <TableData items={filterItems}/>
              </tbody>
            </table>
          </div>
        </div>
      
    </div>
  );
})


