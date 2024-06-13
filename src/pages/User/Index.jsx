import {useEffect, useState} from "react";
import Case from "../../components/Case";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function User() {
    const [users, setUsers] = useState([]); 
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
            instance.get('user')
            .then(res =>{
                setUsers(res.data.data)
                console.log(res.data.data)
                console.log(users)
            })
            .catch(err=>{
                console.error(err);
                if(err.response.status == 401) {
                    navigate('/login?message=' + encodeURIComponent('Anda Belum Login!'))
                }
            });
        },[navigate])

        const deleteUser = (id) => {
            instance.delete(`user/destroy/${id}`)
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
                    <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white flex justify-between">User</h5>
                    <div className="flex justify-end">
                        <Link to="/user/create"> 
                         <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg m-1 mb-5">
                            Create
                            <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
                        </button></Link>
                        <Link to="/user/trash"> 
                         <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg m-1 mb-5">
                            Trash
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
                                    <th scope="col" className="px-6 py-4">username</th>
                                    <th scope="col" className="px-6 py-4">email</th>
                                    <th scope="col" className="px-6 py-4">password</th>
                                    <th scope="col" className="px-6 py-4">role</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        users.map((user, id) => (
                                            <tr key={user.id} className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">{id + 1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.username}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.password}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
                                                {/* {
                                                    stuff.stuffstock ? (
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Total Available: {stuff.stuffstock.total_available} <br/>
                                                            Total Defect: {stuff.stuffstock.total_defect} <br/>
                                                        </td>
                                                    ) : (
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Stock Belum Ditambahkan
                                                        </td>
                                                    ) 
                                                } */}
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <Link to={'/user/edit/' + user.id}><button className="px-4 py-2 bg-orange-500 
                                                    rounded-lg mr-2 font-bold text-white">Edit</button></Link>
                                                    
                                                    <button onClick={() => deleteUser(user.id)} type="button" className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
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