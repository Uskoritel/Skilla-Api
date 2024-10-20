import { useState } from 'react'

export default function useFetchData(callback){
    const [loader, setLoader] = useState(false);
    const fetchData = async (...args) => {
        try{
            setLoader(true);
            await callback(...args);
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            setLoader(false);
        }
    }

    return [fetchData, loader]

}