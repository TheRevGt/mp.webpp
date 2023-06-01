import React, {useState} from "react";
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
    { id: 21, name: 'Zacapa' }
]
const Form = () => {
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
    let {name, cel, address, city } = cite
    const hendleSubmit = () => {
        cel = parseInt(cel, 10)
        if(name == ""){
            
        }
    }
    return (
        <form onSubmit={hendleSubmit}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col m-6">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input onChange={handleChange} name="name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Fiscalía de Distrito "/>
                        <p className="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="city">
                            Departamento
                        </label>
                        <div className="relative">
                            <select onChange={handleChange} name="city" className="block  w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="city">
                                <option value="0"> Seleccionar</option>
                                {dep.map(item => (
                                    <option value={item.id}> {item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="addres">
                            Direccion
                        </label>
                        <input onChange={handleChange} name="address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="addres" type="text" placeholder="7a Calle 8-40 Zona 3 "/>
                        <p className="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="cel">
                            Numero de telefono
                        </label>
                        <input onChange={handleChange} name="cel" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="cel" type="number" placeholder="12345678"/>
                    </div>
                </div>
                <button>Enviar</button>
            </div>
        </form>
    );
}
export default Form