import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../Spinner";


const Request = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios("https://61407fe04a700c0017b0cd4e.mockapi.io/request")
            .then(({data}) => {
                setUsers(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className="box">
            <table>
                <caption>Заявки</caption>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Телефон</th>
                    <th>Почта</th>
                </tr>
                {
                    users.map(item => (
                        <>
                            <tr>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.phone}</th>
                                <th>{item.email}</th>
                            </tr>
                        </>
                    ))
                }
            </table>
        </div>
    )
}

export default Request