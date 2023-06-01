import React, { useState } from "react";
import Modal from "./modal";
const Cardfiscalia = ({key, idCite, name, city, address, cel, setCitesUpdate}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dep = [
        { id: 1, name: 'Alta Verapaz' },
        { id: 2, name: 'Baja Verapaz' },
        { id: 3, name: 'Chimaltenango' },
        { id: 4, name: 'Chiquimula' },
        { id: 5, name: 'El Progreso' },
        { id: 6, name: 'Escuintla' },
        { id: 7, name: 'Huehuetenango' },
        { id: 8, name: 'Izabal' },
        { id: 9, name: 'Jalapa' },
        { id: 10, name: 'Jutiapa' },
        { id: 11, name: 'Peten' },
        { id: 12, name: 'Quetzaltenango' },
        { id: 13, name: 'Quiche' },
        { id: 14, name: 'Retalhuleu' },
        { id: 15, name: 'Sacatepequez' },
        { id: 16, name: 'San Marcos' },
        { id: 17, name: 'Santa Rosa' },
        { id: 18, name: 'Sololá' },
        { id: 19, name: 'Suchitepequez' },
        { id: 20, name: 'Totonicapan' },
        { id: 21, name: 'Zacapa' },
        { id: 22, name: 'Guatemala' }
    ]
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    //delete item
    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        //query
        fetch('http://localhost:9000/oficinas/'+ idCite, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        setCitesUpdate(true)
    } 

    const [cite, setCite] = useState({
        name: "",
        cel: "",
        city: "",
        addres: ""
      })
    const handleChange = e => {
        setCite({
            ...cite,
            [e.target.name]: e.target.value
        })
    }

    const hendleSubmit = () => {
        cel = parseInt(cel, 10)
        if(name == ""){
            alert('El campo nombre es requerido')
        }
        //consult
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cite)
        }
        //query
        fetch('http://localhost:9000/oficinas', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
        //reset states
        setCite({
            name: "",
            cel: "",
            city: "",
            addres: ""
        })
    }
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
                <div className="prod-info grid gap-5">
                    <div className="text-sm leading-normal text-blueGray-400 font-bold uppercase">
                        <svg className=" inline-block mr-2 text-lg text-blueGray-400 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        { address }, {city}
                    </div>
                    <div className="text-sm leading-normal text-blueGray-400 font-bold uppercase">
                    <svg className=" inline-block mr-2 text-lg text-blueGray-400 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                        { cel }
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}
export default Cardfiscalia