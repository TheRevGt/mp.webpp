import React, { useState, useEffect } from "react";
import Card from "../Card";
const Home = () => {
    const [cites, setCites] = useState([])
    const [citesUpdate, setCitesUpdate] = useState(false)
    useEffect(() =>{
        const getCites = () => {
        fetch('http://localhost:9000/oficinas')
        .then(res => res.json())
        .then(res => setCites(res))
        }
        getCites()
        setCitesUpdate(false)
    }, [citesUpdate])


    return (
        <div className="w-full relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
            <div className="container w-full mx-auto px-4">
                <header className="text-center mx-auto mb-12 lg:px-20">
                    <div className="relative pt-2 mx-auto">
                        <input className="border-2 relative border-gray-300 bg-white h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    </div>
                    <h2 className="text-2xl leading-normal mb-2 font-bold text-black">Fiscalias</h2>
                    <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Cada día aun más serca de usted.</p>
                </header>
                <div className="flex flex-wrap flex-row ">
                    {cites.map(cite => (
                        <Card key={cite.ID} idCite={cite.ID} name={cite.name} city={cite.city} address={cite.address} cel={cite.cel} setCitesUpdate={setCitesUpdate}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Home