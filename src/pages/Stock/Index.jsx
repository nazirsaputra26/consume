import axios from 'axios';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Case from "../../components/Case";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function StuffStock() {
    const [stuffstocks, setStuffStocks] = useState([]); 
        const navigate = useNavigate()
        const[error, setError] = useState ([]);
        const token = localStorage.getItem('access_token');

        const instance = axios.create({
            baseURL: 'http://localhost:8000/',
            headers: {
                'Authorization': 'Bearer ' + token,
                }
        })
    
        useEffect(() => {
            instance.get('StuffStock')
            .then(res =>{
                setStuffStocks(res.data.data)
                console.log(res.data.data)
                console.log(stuffstocks)
            })
            .catch(err=>{
                console.error(err);
                if(err.response.status == 401) {
                    navigate('/login?message' + encodeURIComponent('Anda Belum Login!'))
                }
            });
        },[navigate])

        const deleteStuffStock = (id) => {
            instance.delete(`StuffStock/$(id)`)
            .then(res => {
                location.reload()
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data)
            })
        }
    return(
        <Case>
            <div className="block m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="items-center m-5 pb-10 pt-10">
                    <div className="flex justify-between">
                        <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Stuff</h5>
                        <Link to="/StuffStock/create"> 
                         <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg mb-5">
                            Tambah
                            <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
                        </button></Link>
                      
                    </div>
                    {
                        Object.keys(error).length > 0 ? (
                            <div role="alert">
                                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                    Gagal!
                                </div>
                                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                    <ul>
                                        {
                                            error.message
                                            // Object.entries(error).map(([key, value], i) => (
                                            //     <li key={key}>{key != "status" ? i+1 + '. ' + value : ''}</li>
                                            // ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ) : ''
                    }

                    <div className="flex mt-4 md:mt-6">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-4">No</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Category</th>
                                    <th scope="col" className="px-6 py-4">Stock</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        stuffs.map((stuffstock, id) => (
                                            <tr key={stuff.id} className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">{id + 1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{stuffstock.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{stuffstock.category}</td>
                                                {
                                                    stuffstock.stuff ? (
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Total Available: {stuffstock.stuffstock.total_available} <br/>
                                                            Total Defect: {stuffstock.stuffstock.total_defect} <br/>
                                                        </td>
                                                    ) : (
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Stock Belum Ditambahkan
                                                        </td>
                                                    ) 
                                                }
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <Link to={'/StuffStock/edit/' + stuff.id}><button className="px-4 py-2 bg-orange-500 
                                                    rounded-lg mr-2 font-bold text-white">Edit</button></Link>
                                                    
                                                    <button onClick={() => deleteStuffStock(stuff.id)} type="button" className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
                                                </td>
                                            </tr> 
                                        ))
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>

            
        </Case>
    )
}