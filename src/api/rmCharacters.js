import { API_HOST } from "../utils/constants"

export async function getRickMortyApi(enpointUrl){
    try{
        const url = `${API_HOST}/character`
        const response = await fetch(enpointUrl || url)
        const result = await response.json()
        return result
    }catch (error){
        throw error
    }
}