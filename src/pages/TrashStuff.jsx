import React, {useEffect, useState} from "react";
import Case from "../components/Case";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function TrashStuff() {
    const [stuffsTrash, setStuffsTrash] = useState([]);
    const [navigate, useNavigate] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/stuff/trash', {
            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('access_token')
            }
        })
        .then(res => {
            setStuffsTrash(res.data.data)
        })
        .catch(err => {
            if(err.response.status == 401) {
                navigate('/login?message=' + encodeURIComponent('Anda Belum login'))
            }
        })
    }, [])

    const headers = [
        "#",
        "Name",
        "Category"
    ]

    const endpointModal = {
        "restore": "http://localhost:8000/stuff/trash/restore/{id}",
        "delete_permanent": "http://localhost:8000/stuff/trash/permanent/{id}"
    }

    const inputData = {}

    const title = 'stuff'

    const columnIdentitasDelete = 'name'

    const buttons = {
        "restore",
        "permanentDeletes",
    }
    
    const tdColumn = {
        "name": null,
        "category": null,
    }

    return (
        <>
            <Case>
                <Table headers={headers} data={stuffsTrash} endpoint={endpointModal} inputData={inputData} titleModal={title} identitasColumn=
                {columnIdentitasDelete} opsiButtons={buttons} columnForTd={tdColumn}></Table>
            </Case>
        </>
    )
}