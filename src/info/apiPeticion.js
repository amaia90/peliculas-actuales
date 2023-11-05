const ApiPelis="https://api.themoviedb.org/3"
export function get(path){
    return fetch(ApiPelis+path,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDgxNmUzMDc3MWQ3M2NlN2U2MjI2ODVjMTIxMTA0NSIsInN1YiI6IjY1MmFiOTg4MzU4ZGE3MDBjNmYxMDc5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qsoQuW4NPAzADgF5B01GyildkidtWVn6EQx5l35R1cg", "Content-Type":"application/json;charset=utf-8"
        }
    }).then((data)=>data.json());
}

