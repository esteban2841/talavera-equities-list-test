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

export async function characterDetailFound (id){
    const page = Math.ceil(id/20)
    const response = await fetch("https://rickandmortyapi.com/api/character?page="+page)
    const result = await response.json()
    const character= result.results.filter(c => { 
       return c.id === id 
    })
    return character[0]
}