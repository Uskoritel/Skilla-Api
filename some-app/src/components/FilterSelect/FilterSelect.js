export default function FilterSelect({option, value, defaultVal, change}){
    return(
        <select value={value}
            onChange={ (e) => change(e.target.value)}
            className='filterSel'
        >
              <option disabled value="">{defaultVal}</option>
              {
                option.map( (elem) => {
                    return(
                        <option key={elem.value} value={elem.value}>{elem.name}</option>
                    )
                })
              }
        </select>
    )
}