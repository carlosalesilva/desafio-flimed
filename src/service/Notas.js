import axios from "axios";

export function ListarNotas(token){
    return axios({
        method:"GET",
        url:"https://test-flimed-backend.herokuapp.com/users/show",
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}

export function GetNota(token, id){
    return axios({
        method:"GET",
        url:`https://test-flimed-backend.herokuapp.com/notes/show/${id}`,
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}

export function CriarNotas(token, nota){
    return(
        axios({
            method: "POST",
            url: "https://test-flimed-backend.herokuapp.com/notes/create",
            headers: {
                'Authorization': `Bearer ${token}` 
            },
            data:nota
        })
    );
}

export function DeleteNotas(token, id){
    return(
        axios({
            method: "DELETE",
            url: `https://test-flimed-backend.herokuapp.com/notes/delete/${id}`,
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        })
    );
}
