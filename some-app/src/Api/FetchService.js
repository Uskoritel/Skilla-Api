import axios from 'axios'
export default class FetchService{
    static async getCalls(sort, sortOrder){
   
      const response = await axios.post('https://api.skilla.ru/mango/getList', null, { 
            headers: {
                 'Authorization': 'Bearer testtoken',
            },
            params: {
                sort_by: sort,
                order: sortOrder
            }
         })

         return response.data.results
        }

    static async getRecord(partner_id, record){
        const response = await axios.post(`https://api.skilla.ru/mango/getRecord`, null,  { 
            headers: {
                'Authorization': 'Bearer testtoken',
                'Content-Disposition': 'filename="record.mp3"',
                'Content-Transfer-Encoding': 'binary',
                'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3'
            },
            responseType: 'blob',
            params: {
                record : record,
                partnership_id : partner_id
            }
         })
    
            return response.data.arrayBuffer()
        }


    }
