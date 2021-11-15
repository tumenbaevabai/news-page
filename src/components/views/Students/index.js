import axios from "axios";
import {useState, useEffect} from "react";
import Spinner from "../../Spinner";
import Modal from 'react-modal'
import {useForm} from "react-hook-form";
import StudentPage from "../StudentPage";
import Button from "../../Button";
import Input from "../../Input";


const Students = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "50%"
        },
    }
    const handleCloseModal = () => {
        setModalIsOpen(false)
    }
    const onSubmitPost = (d) => {
        axios.post("https://61407fe04a700c0017b0cd4e.mockapi.io/students", d)
            .then(({data}) => {
                setStudents([...students, data])
                setModalIsOpen(false)
                reset()
            })
    }
    const onSubmitPut = (data, id) => {
        axios.put(`https://61407fe04a700c0017b0cd4e.mockapi.io/students/${id}`, data)
            .then(({data:student}) => {
                setStudents(students.map(el => id === el.id ? {...student, data} : el))
            })
    }
    const handleDelete = (deleteId) => {
        axios.delete(`https://61407fe04a700c0017b0cd4e.mockapi.io/students/${deleteId}`)
            .then(() => {
                setStudents(students.filter(item => item.id !== deleteId))
            })
    }
    useEffect(() => {
        axios("https://61407fe04a700c0017b0cd4e.mockapi.io/students")
            .then(({data}) => {
                setIsLoading(false)
                setStudents(data)
            })
    }, [])
    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <table className="table table-success table-striped">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Телефон</th>
                    <th>Контракт</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map(item =>
                        <StudentPage
                            student={item}
                            key={item.id}
                            handleDelete={handleDelete}
                            onSubmitPut={onSubmitPut}
                        />
                    )
                }
                </tbody>
            </table>
            <Button
                color={"success"}
                marginLeft={"d-block ms-auto"}
                buttonText={"Добавить студента"}
                onClick={() => setModalIsOpen(true)}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <form onSubmit={handleSubmit(onSubmitPost)}>
                    <div className="mb-5">
                        <Input
                            name={"name"}
                            nameText={"Имя"}
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <Input
                            name={"phone"}
                            nameText={"Телефон"}
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <Input
                            name={"contract"}
                            nameText={"Контракт"}
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                    <Button
                        color={"success"}
                        marginLeft={"d-block ms-auto"}
                        buttonText={"Добавить студента"}
                    />
                </form>
            </Modal>
        </>
    )

}

export default Students