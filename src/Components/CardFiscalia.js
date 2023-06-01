import React from "react";
const Cardfiscalia = ({name, city, addres}) => {
    return (
        <div className="container mx-auto max-w-sm w-full p-2 sm:w-1/2">
            <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                    <p className="text-2xl uppercase text-gray-900 font-bold">{ name }</p>
                    <p className="text-lg uppercase text-gray-900 font-bold">{ city }</p>
                </div>
                <div className="prod-img">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipMBd6QwwirgaIbwTN76uMBo53xhwuyoYBxXEjkJ=s680-w680-h510"
                        className="w-auto h-auto object-cover object-center pb-3" />
                </div>
                <div className="prod-info grid gap-10">
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <svg className=" absolute mr-2 text-lg text-blueGray-400 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        { addres }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cardfiscalia