// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Case from "../../components/Case";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Inbound() {
//     const [inbounds, setInbounds] = useState([]);
//     const [error, setError] = useState([]);

//     const navigate = useNavigate();

//     const instance = axios.create({
//         baseURL: 'http://localhost:8000/',
//         headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem('access_token')
//         }
//     });

//     useEffect(() => {
//         instance.get('inbound', {
//             headers: {
//                 'Authorization': 'Bearer ' + localStorage.getItem('access_token')
//             }
//         })
//         .then(res => {
//             setInbounds(res.data.data);
//         })
//         .catch(err => {
//             if (err.response.status === 401) {
//                 navigate('/login?message=' + encodeURIComponent('Anda Belum Login!'));
//             }
//         });
//     }, [navigate]);

//     const deleteInbound = (id) => {
//         instance.delete(`inbound/destroy/${id}`)
//         .then(res => {
//             location.reload();
//         })
//         .catch(err => {
//             setError(err.response.data);
//         });
//     };

//     const UrlImage = "http://localhost:8000/proff/"

//     return (
//         <Case>
//             <div className="block m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <div className="items-center m-5 pb-10 pt-10">
//                     <div className="flex justify-between">
//                         <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Inbound</h5>
//                         <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg">
//                             <Link to={'/inbound/create'}>Tambah</Link>
//                             <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
//                         </button>
//                     </div>
//                     {Object.keys(error).length > 0 && (
//                         <div role="alert">
//                             <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
//                                 Gagal!
//                             </div>
//                             <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
//                                 <ul>{error.message}</ul>
//                             </div>
//                         </div>
//                     )}
//                     <div className="flex mt-4 md:mt-6">
//                         <table className="min-w-full text-left text-sm font-light">
//                             <thead className="border-b font-medium dark:border-neutral-500 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                                 <tr>
//                                     <th scope="col" className="px-6 py-4">No</th>
//                                     <th scope="col" className="px-6 py-4">Stuff_Id</th>
//                                     <th scope="col" className="px-6 py-4">Total</th>
//                                     <th scope="col" className="px-6 py-4">Date</th>
//                                     <th scope="col" className="px-6 py-4">Proff_File</th>
//                                     <th scope="col" className="px-6 py-4">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {inbounds.map((inbound, id) => (
//                                     <tr key={inbound.id} className="border-b dark:border-neutral-500">
//                                         <td className="whitespace-nowrap px-6 py-4">{id + 1}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">{inbound.stuff_id}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">{inbound.total}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">{inbound.date}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">
//                                             <img src={UrlImage + inbound.proff_file} alt="" className="w-20 h-20 object-cover" />
//                                         </td>
//                                         <td className="whitespace-nowrap px-6 py-4">
//                                             <button type="button" onClick={() => deleteInbound(inbound.id)} className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </Case>
//     );
// }




// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Case from "../../components/Case";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Inbound() {
//     const [inbounds, setInbounds] = useState([]);
//     const [error, setError] = useState([]);

//     const navigate = useNavigate();

//     const instance = axios.create({
//         baseURL: 'http://localhost:8000/',
//         headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem('access_token')
//         }
//     });

//     useEffect(() => {
//         instance.get('inbound', {
//             headers: {
//                 'Authorization': 'Bearer ' + localStorage.getItem('access_token')
//             }
//         })
//         .then(res => {
//             setInbounds(res.data.data);
//         })
//         .catch(err => {
//             if (err.response.status === 401) {
//                 navigate('/login?message=' + encodeURIComponent('Anda Belum Login!'));
//             }
//         });
//     }, [navigate]);

//     const deleteInbound = (id) => {
//         instance.delete(`inbound/destroy/${id}`)
//         .then(res => {
//             location.reload();
//         })
//         .catch(err => {
//             setError(err.response.data);
//         });
//     };

//     const UrlImage = "http://localhost:8000/proff/";

//     return (
//         <Case>
//             <div className="block m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <div className="items-center m-5 pb-10 pt-10">
//                     <div className="flex justify-between">
//                         <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Inbound</h5>
//                         <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg">
//                             <Link to={'/inbound/create'}>Tambah</Link>
//                             <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
//                         </button>
//                     </div>
//                     {Object.keys(error).length > 0 && (
//                         <div role="alert">
//                             <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
//                                 Gagal!
//                             </div>
//                             <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
//                                 <ul>{error.message}</ul>
//                             </div>
//                         </div>
//                     )}
//                     <div className="flex mt-4 md:mt-6">
//                         <table className="min-w-full text-left text-sm font-light">
//                             <thead className="border-b font-medium dark:border-neutral-500 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                                 <tr>
//                                     <th scope="col" className="px-6 py-4">No</th>
//                                     <th scope="col" className="px-6 py-4">Stuff_Id</th>
//                                     <th scope="col" className="px-6 py-4">Total</th>
//                                     <th scope="col" className="px-6 py-4">Date</th>
//                                     <th scope="col" className="px-6 py-4">Proff_File</th>
//                                     <th scope="col" className="px-6 py-4">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {inbounds.map((inbound, id) => (
//                                     <tr key={inbound.id} className="border-b dark:border-neutral-500">
//                                         <td className="whitespace-nowrap px-6 py-4">{id + 1}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">{inbound.stuff_id}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">{inbound.total}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">{inbound.date}</td>
//                                         <td className="whitespace-nowrap px-6 py-4">
//                                             <img src={UrlImage + inbound.proff_file} alt="" className="w-20 h-20 object-cover" />
//                                         </td>
//                                         <td className="whitespace-nowrap px-6 py-4">
//                                             <button type="button" onClick={() => deleteInbound(inbound.id)} className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </Case>
//     );
// }




import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Case from "../../components/Case";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Inbound() {
    const [inbounds, setInbounds] = useState([]);
    const [error, setError] = useState([]);

    const navigate = useNavigate();

    const instance = axios.create({
        baseURL: 'http://localhost:8000/',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });

    useEffect(() => {
        instance.get('inbound', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(res => {
            setInbounds(res.data.data);
        })
        .catch(err => {
            if (err.response.status === 401) {
                navigate('/login?message=' + encodeURIComponent('Anda Belum Login!'));
            }
        });
    }, [navigate]);

    const deleteInbound = (id) => {
        instance.delete(`inbound/destroy/${id}`)
        .then(res => {
            location.reload();
        })
        .catch(err => {
            setError(err.response.data);
        })
    }

    const UrlImage = "http://localhost:8000/uploads/"

    return (
        <Case>
            <div className="block m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="items-center m-5 pb-10 pt-10">
                    <h5 className="mb-1 ml-5 text-3xl font-medium text-gray-900 dark:text-white">Inbound</h5>
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-teal-700 text-white shadow-md border-sky-500 rounded-lg">
                            <Link to={'/inbound/create'}>Tambah</Link>
                            <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
                        </button>
                        <button className="px-4 py-2 ms-1 bg-orange-700 text-white shadow-md border-sky-500 rounded-lg">
                            <Link to={'/inbound/trash'}>Trash</Link>
                            <FontAwesomeIcon icon="fa-solid fa-plus" className="pl-1 w-4 h-4 text-inherit" />
                        </button>
                    </div>
                    {Object.keys(error).length > 0 && (
                        <div role="alert">
                            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Gagal!
                            </div>
                            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <ul>{error.message}</ul>
                            </div>
                        </div>
                    )}
                    <div className="flex mt-4 md:mt-6">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-4">No</th>
                                    <th scope="col" className="px-6 py-4">Stuff_Id</th>
                                    <th scope="col" className="px-6 py-4">Total</th>
                                    <th scope="col" className="px-6 py-4">Date</th>
                                    <th scope="col" className="px-6 py-4">Proff_File</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inbounds.map((inbound, id) => (
                                    <tr key={inbound.id} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4">{id+1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{inbound.stuff_id}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{inbound.total}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{inbound.date}</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <a href={UrlImage + inbound.proff_file} terget="_blank" alt="" className="w-16 h-auto object-cover">
                                                <img src={UrlImage + inbound.proff_file} alt="" className="w-16 h-auto object-cover" />
                                            </a>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <Link to={'/inbound/edit' + inbound.id} className="px-4 py-2 bg-orange-500 rounded-lg mr-2 font-bold text-white">Edit</Link>    
                                            <button type="button" onClick={() => deleteInbound(inbound.id)} className="px-4 py-2 bg-red-500 rounded-lg mr-2 font-bold text-white">Hapus</button>    
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Case>
    );
}
