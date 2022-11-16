// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default async function handler(req, res) {
  const d = await axios.get('https://car-data.p.rapidapi.com/cars', {
    headers: {
      'X-RapidAPI-Key': process.env.X-RapidAPI-Key,
      'X-RapidAPI-Host': process.env.X-RapidAPI-Host-Cars
    },
    params: {limit: 20, page: '0'}
  });

  res.status(200).json(d.data);
}
