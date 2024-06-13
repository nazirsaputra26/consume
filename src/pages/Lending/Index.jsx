import axios from 'axios';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Case from "../../components/Case";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Lending() {
    const [lendings, setLendings] = useState([]); 
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
            instance.get('lendings')
            .then(res =>{
                setLendings(res.data.data)
                console.log(res.data.data)
                console.log(lendings)
            })
            .catch(err=>{
                console.error(err);
                if(err.response.status == 401) {
                    navigate('/login?message' + encodeURIComponent('Anda Belum Login!'))
                }
            });
        },[navigate])

        const deleteInbound = (id) => {
            instance.delete(`lendings/destroy/${id}`)
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
                        <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Lending</h5>
                        <Link to="/lendings/create"> 
                         <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg mb-5">
                            Create
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
                                    <th scope="col" className="px-6 py-4">Stuff_id</th>
                                    <th scope="col" className="px-6 py-4">Date time</th>
                                    <th scope="col" className="px-6 py-4">name</th>
                                    <th scope="col" className="px-6 py-4">User id</th>
                                    <th scope="col" className="px-6 py-4">notes</th>
                                    <th scope="col" className="px-6 py-4">Total stuff</th>

                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        lendings.map((lending, id) => (
                                            <tr key={lending.id} className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">{id + 1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{lending.stuff_id}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{lending.date_time}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{lending.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{lending.user_id}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{lending.notes}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{lending.total_stuff}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <Link to={'/lendings/edit/' + lending.id}><button className="px-4 py-2 bg-orange-500 
                                                    rounded-lg mr-2 font-bold text-white">Edit</button></Link>
                                                    
                                                    <button onClick={() => deleteInbound(lending.id)} type="button" className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
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