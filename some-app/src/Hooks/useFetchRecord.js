
export default function useFetchRecord(callback){

    const fetchData = async (...args) => {
        try{
            await callback(...args);
        }
        catch(e){
            console.log(e.message)
        }
    }

    return fetchData

}