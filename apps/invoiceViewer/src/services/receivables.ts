import { IReceivableDTO } from 'models'
import httpService from './http'

const getAll = async():Promise<IReceivableDTO[]>=>{
    //TODO: this should come from an API but it is currently restricted by CORS
    const response = await httpService.get('/sample-receivables-data.json')
    return response.data
}

export default {
    getAll,
}
