import React from "react";
import Cardfiscalia from "./CardFiscalia";
const Home = () => {
    return (
        <div class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
            <div class="container xl:max-w-6xl mx-auto px-4">
                <header class="text-center mx-auto mb-12 lg:px-20">
                    <div class="relative pt-2 mx-auto">
                        <input class="border-2 relative border-gray-300 bg-white h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    </div>
                    <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Fiscalias</h2>
                    <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Cada día aun más serca de usted.</p>
                </header>
                <div class="flex flex-wrap flex-row -mx-4 text-center">
                    <Cardfiscalia name="Fiscalia 1" city="Solola" addres="1 calle zon 7"/>
                </div>
            </div>
        </div>
    );
}
export default Home