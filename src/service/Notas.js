import axios from "axios";

export function ListarNotas(token){
    return axios({
        method:"GET",
        url:"https://test-flimed-backend.herokuapp.com/notes/show/e367f046-8260-4d72-ac2e-3adfb07c9194",
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
            headers:{
                "token": token,
            },
            data:nota
        })
    );
}

