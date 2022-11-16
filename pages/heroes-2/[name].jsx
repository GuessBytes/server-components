import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroTraits from "../../components/hero-traits";

export default function HeroDetails2({hero}) {
    return (
        <div className="container md:flex md:mt-6 mx-auto">
            <div>
                <Image src={hero?.images?.lg} alt={hero?.name} width={480} height={640} layout="fixed" className="sticky top-4" />
            </div>

            <div className="md:px-8 px-4 mt-4 md:mt-0 mb-10">
                <h2 className="text-2xl">{hero?.name}</h2>

                <div className="md:grid grid-cols-2 gap-6">
                    <div className="powerstats mt-6">
                        <h3 className="text-lg">Power Stats</h3>
                        {hero?.powerstats && Object.keys(hero.powerstats).map((power) => {
                            return (
                                <HeroTraits key={power} trait={power} value={<progress id="file" value={hero.powerstats[power]} max="100"> {power}% </progress>} />
                            );
                        })}
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg">Appearance</h3>

                        <HeroTraits trait="Gender" value={hero?.appearance?.gender} />

                        <HeroTraits trait="Race" value={hero?.appearance?.race} />

                        <HeroTraits trait="Height" value={hero?.appearance?.height[0]} />

                        <HeroTraits trait="Weight" value={hero?.appearance?.weight[0]} />

                        <HeroTraits trait="Eye Color" value={hero?.appearance?.eyeColor} />

                        <HeroTraits trait="Hair Color" value={hero?.appearance?.hairColor} />
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg">Biography</h3>

                    <HeroTraits trait="Full Name" value={hero?.biography?.fullName} />

                    <HeroTraits trait="Alter Egos" value={hero?.biography?.alterEgos} />

                    {hero?.biography?.aliases && Object.keys(hero?.biography?.aliases).length > 0 && (
                        <>
                            <h4 className="text-md ml-4 mt-3">Aliases</h4>

                            <div className="ml-4">
                                {Object.keys(hero?.biography?.aliases).map((alias) => {
                                    <HeroTraits key={alias} trait={`Alias ${alias}`} value={hero?.biography?.aliases[alias]} />
                                })}
                            </div>
                        </>
                    )}

                    <HeroTraits trait="Birth Place" value={hero?.biography?.placeOfBirth} />

                    <HeroTraits trait="First Appearance" value={hero?.biography?.firstAppearance} />

                    <HeroTraits trait="Publisher" value={hero?.biography?.publisher} />

                    <HeroTraits trait="Good" value={hero?.biography?.alignment} />

                </div>

                <div className="mt-6">
                    <h3 className="text-lg">Work</h3>

                    <HeroTraits trait="Occupation" value={hero?.work?.occupation} />

                    <HeroTraits trait="Base" value={hero?.work?.base} />
                </div>

                <div className="mt-6">
                    <h3 className="text-lg">Connections</h3>

                    <HeroTraits trait="Group Affiliation" value={hero?.connections?.groupAffiliation} />

                    <HeroTraits trait="Relatives" value={hero?.connections?.relatives} />
                </div>

            </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const r = await fetch('https://superhero-search.p.rapidapi.com/api/?hero=' + params.name, {
        headers: {
            'X-RapidAPI-Key': process.env.RapidAPI_Key,
            'X-RapidAPI-Host': process.env.RapidAPI_Host
        }
    });

    const d = await r.json();

    return {
        props: {
            hero: d
        }
    }
}