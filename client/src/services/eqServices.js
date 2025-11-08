import axios from "axios"


export const eqParam = async () =>{
    try {
        const res = await axios.get("https://earthquake.usgs.gov/fdsnws/event/1/application.json");
        return res
    } catch (error) {
        console.error("Error Getting API",error)
        throw error
    }
}