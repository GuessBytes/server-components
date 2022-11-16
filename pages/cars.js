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
    return {
        props: {
            cars: []
        }
    };
}