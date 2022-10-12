import axios from "axios";

// export function buy(id, success,fail){
//     let headers={Authorization: 'JWT '+ localStorage.getItem('JWT')}
//     axios.post("/post/payment/",{id:id},{headers: headers}).then(res=>success()).catch(e=>{
//         if(e.response.status===401){
//             fail()
//         }
//     })
// }

export function post(product, success, fail){
    let headers={Authorization: 'JWT '+ localStorage.getItem('JWT')}
    axios.post("/post/create/", product, {headers: headers}).then(res=>{success()}).catch(e=>{fail()})
}

export function getDetail(id, setdata){
    axios.post(`/post/getallitem/`, {id:id}).then(res=>{setdata(res.data)}).catch(e=>{})
}

export function getItems(setdata){
    return axios.get('/post/getallitem/').then(res=>{setdata(res.data)}).catch(e=>{})
}

