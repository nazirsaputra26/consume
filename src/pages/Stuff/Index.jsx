// import axios from 'axios';
// import {useEffect, useState} from "react";
// import {Link, useNavigate} from "react-router-dom";
// import Case from "../../components/Case";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// export default function Stuff() {
//     const [stuffs, setStuffs] = useState([]); 
//         const navigate = useNavigate()
//         const[error, setError] = useState ([]);
//         const token = localStorage.getItem('access_token');

//         const instance = axios.create({
//             baseURL: 'http://localhost:8000/',
//             headers: {
//                 'Authorization': 'Bearer ' + token,
//                 }
//         })
    
//         useEffect(() => {
//             instance.get('stuff')
//             .then(res =>{
//                 setStuffs(res.data.data)
//                 console.log(res.data.data)
//                 console.log(stuffs)
//             })
//             .catch(err=>{
//                 console.error(err);
//                 if(err.response.status == 401) {
//                     navigate('/login?message=' + encodeURIComponent('Anda Belum Login!'))
//                 }
//             });
//         },[navigate])

//         const deleteStuff = (id) => {
//             instance.delete(`stuff/destroy/${id}`)
//             .then(res => {
//                 location.reload()
//             })
//             .catch(err => {
//                 console.error(err);
//                 setError(err.response.data)
//             })
//         }
//     return(
//         <Case>
//             <div className="block m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <div className="items-center m-5 pb-10 pt-10">
//                     <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white flex justify-between">Stuff</h5>
//                     <div className="flex justify-end">
//                         <Link to="/stuff/create"> 
//                          <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg m-1 mb-5">
//                             Create
//                             <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
//                         </button></Link>
//                         <Link to="/stuff/trash"> 
//                          <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg m-1 mb-5">
//                             Trash
//                             <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
//                         </button></Link>
                    
                      
//                     </div>
//                     {
//                         Object.keys(error).length > 0 ? (
//                             <div role="alert">
//                                 <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
//                                     Gagal!
//                                 </div>
//                                 <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
//                                     <ul>
//                                         {
//                                             error.message
//                                             // Object.entries(error).map(([key, value], i) => (
//                                             //     <li key={key}>{key != "status" ? i+1 + '. ' + value : ''}</li>
//                                             // ))
//                                         }
//                                     </ul>
//                                 </div>
//                             </div>
//                         ) : ''
//                     }

//                     <div className="flex mt-4 md:mt-6">
//                         <table className="min-w-full text-left text-sm font-light">
//                             <thead className="border-b font-medium dark:border-neutral-500 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                                 <tr>
//                                     <th scope="col" className="px-6 py-4">No</th>
//                                     <th scope="col" className="px-6 py-4">Name</th>
//                                     <th scope="col" className="px-6 py-4">Category</th>
//                                     <th scope="col" className="px-6 py-4">Stock</th>
//                                     <th scope="col" className="px-6 py-4">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                     {
//                                         stuffs.map((stuff, id) => (
//                                             <tr key={stuff.id} className="border-b dark:border-neutral-500">
//                                                 <td className="whitespace-nowrap px-6 py-4">{id + 1}</td>
//                                                 <td className="whitespace-nowrap px-6 py-4">{stuff.name}</td>
//                                                 <td className="whitespace-nowrap px-6 py-4">{stuff.category}</td>
//                                                 {
//                                                     stuff.stuffstock ? (
//                                                         <td className="whitespace-nowrap px-6 py-4">
//                                                             Total Available: {stuff.stuffstock.total_available} <br/>
//                                                             Total Defect: {stuff.stuffstock.total_defect} <br/>
//                                                         </td>
//                                                     ) : (
//                                                         <td className="whitespace-nowrap px-6 py-4">
//                                                             Stock Belum Ditambahkan
//                                                         </td>
//                                                     ) 
//                                                 }
//                                                 <td className="whitespace-nowrap px-6 py-4">
//                                                     <Link to={'/stuff/edit/' + stuff.id}><button className="px-4 py-2 bg-orange-500 
//                                                     rounded-lg mr-2 font-bold text-white">Edit</button></Link>
                                                    
//                                                     <button onClick={() => deleteStuff(stuff.id)} type="button" className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
//                                                 </td>
//                                             </tr> 
//                                         ))
//                                     }
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>                
//             </div>            
//         </Case>
//     )
// }



import axios from"axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Case from "../../components/Case";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Stuff() {
    const [stuffs, setStuffs] = useState([])
    const [error, setError] = useState([])

    const navigate = useNavigate()


    const instance = axios.create({
        baseURL: 'http://localhost:8000/',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    })

    useEffect(() => {
        instance.get('stuff', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(res => {
            setStuffs(res.data.data)
         
        })
        .catch(err => {
            if (err.response.status == 401) {
                navigate('/login?message=' + encodeURIComponent('Anda Belum Login!'))
            }
        })
    }, [navigate])

    const deleteStuff = (id) => {
        instance.delete(`stuff/destroy/${id}`)
        .then(res => {
            location.reload()
        })
        .catch(err => {
            setError(err.response.data)
        })
    }
    return(
        <Case>
            <div className="block m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="items-center m-5 pb-10 pt-10">
                <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Stuff</h5>
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg">
                            <Link to={'/stuff/create'}>Tambah</Link>
                            <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
                        </button>
                        <button className="px-4 py-2 ms-1 bg-orange-700 text-white shadow-md border-sky-500 rounded-lg">
                            <Link to={'/stuff/trash'}>Trash</Link>
                            <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
                    </button>
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
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Category</th>
                                    <th scope="col" className="px-6 py-4">Stok</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stuffs.map((stuff, id) => (
                                    <tr key={stuff.id} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4">{id+1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{stuff.name}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{stuff.category}</td>
                                        {
                                            stuff.stuffStock? (
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    Total Avaible: {stuff.stuffStock.total_avaible} <br />
                                                    Total Defect: {stuff.stuffStock.total_defect} <br />
                                                </td>
                                            ) : (
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    Stock Belum Ditambahkan
                                                </td>
                                            )
                                        }
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <Link to={'/stuff/edit/' + stuff.id} className="px-4 py-2 bg-orange-500 rounded-lg mr-2 font-bold text-white">Edit</Link>    
                                            <button type="button" onClick={() => deleteStuff(stuff.id)} className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Case>
    )
}