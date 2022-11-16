import axios from "axios";

export default async function handler(req, res) {
    const d = await axios.get('https://superhero-search.p.rapidapi.com/api/heroes', {
        headers: {
            'X-RapidAPI-Key': process.env.RapidAPI_Key,
            'X-RapidAPI-Host': process.env.RapidAPI_Host
        }
    });

    res.status(200).json(d.data);
}