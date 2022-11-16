import axios from "axios";
import Link from "next/link";

export default async function CarsData() {
    const heroes = await getData();

    return (
        <div>
            <div className="container mx-auto">
                <div className="text-center mt-5">
                    <h2 className="text-2xl font-bold">Our Comic Heroes</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fill,_300px)] mt-4">
                    {heroes.map((hero) => {
                        return (
                            <div key={hero.id} className="shadow hover:shadow-lg">
                                <Link href={`newapi/${hero.name}`} className="h-full w-full">
                                    <img src={hero.images.md} alt="" />

                                    <div className="p-4">
                                        <div>{hero.name}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

async function getData() {
    const r = await fetch('https://superhero-search.p.rapidapi.com/api/heroes', {
        headers: {
            'X-RapidAPI-Key': process.env.RapidAPI_Key,
            'X-RapidAPI-Host': process.env.RapidAPI_Host
        }
    });

    const d = await r.json();

    return d;
}