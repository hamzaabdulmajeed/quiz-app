import axios from "axios"
import { useState } from "react"

export default function APIHandeling() {

    const [dataList, setDataList] = useState<any>([])


    const callApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data)
                setDataList([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const postData = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId: 1,
            title: "Something Important",
            body: "ajsdk jas lkdjak la la lkdalk dlsa lkdsaj"
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const editData = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/2', {
            userId: 1,
            id: 2,
            title: "Something Important",
            body: "ajsdk jas lkdjak la la lkdalk dlsa lkdsaj"
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const deleteData = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/2')
            .then(res => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }


    return <>
        <button onClick={callApi}>Call API</button>
        <button onClick={postData}>Post Data</button>
        <button onClick={editData}>Edit Data</button>
        <button onClick={deleteData}>Delete Data</button>

        <table className="table">
            <tbody>
                {dataList.map((x: any, i: number) => <tr>
                    <td>{x.name}</td>
                    <td>{x.userName}</td>
                    <td>{x.website}</td>
                    <td>{x.email}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}