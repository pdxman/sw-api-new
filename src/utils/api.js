const baseUrl = "https://swapi.dev/api/people/"

const urls = [
    `${baseUrl}1`,
    `${baseUrl}2`,
    `${baseUrl}3`,
    `${baseUrl}4`
]

export const fetchData = async () => {
    try{
        const response = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json()))
        )
        console.log(response)
        return response
    } catch(error){
        console.log('Error', error)
    }
}