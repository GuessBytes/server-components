import axios from "axios";

export default function Cars({ cars }) {
    return (
        <div>
            <h1>List cars with year of make</h1>

            {cars.map((car) => {
                return (<div key={car.id}>{car.year} | {car.make} | {car.model} | {car.type}</div>)
            })}
        </div>
    );
}

export async function getStaticProps(context) {
    // const d = await axios.get('https://car-data.p.rapidapi.com/cars', {
    //     headers: {
    //         'X-RapidAPI-Key': 'e9e73db6acmsh4d7be4224cd4affp14b87ejsnb8787a16e5ab',
    //         'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
    //     },
    //     params: { limit: 20, page: '0' }
    // });

    // const { data } = d;

    return {
        props: {
            cars: []
        }
    };
}