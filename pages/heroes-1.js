import Link from "next/link";
import { useState } from "react";

export default function Heroes() {
    const [heroes, setHeroes] = useState([]);

    useState(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/api/heroes')
            .then(r => r.json()).then(data => {
                setHeroes(data);
            })
    }, []);

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
                                <Link href={`heroes-1/${hero.name}`} className="h-full w-full">
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