import {useState} from "react";
import Modal from 'react-modal'
import {useForm} from "react-hook-form";
import Button from "../../Button";
import Input from "../../Input";

const StudentPage = ({handleDelete, student, onSubmitPut}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
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
    const handlePut = (data) => {
        onSubmitPut(data, student.id)
        setModalIsOpen(false)
        reset()
    }
    return (
        <>
            <tr className="mb-6">
                <th>{student.name}</th>
                <th>{student.phone}</th>
                <th>{student.contract}</th>
                <th>
                    <Button
                        color={"warning"}
                        onClick={() => setModalIsOpen(true)}
                        buttonText={"Изменить"}
                    />
                    <Button
                        color={"danger"}
                        onClick={() => handleDelete(student.id)}
                        buttonText={"Удалить"}
                    />
                </th>
            </tr>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <form onSubmit={handleSubmit(handlePut)}>
                    <div className="mb-5 d-flex">
                        <div className="flex-fill">
                            <Input
                                name={"name"}
                                nameText={"Имя"}
                                register={register}
                                defaultValue={student.name}
                                errors={errors}
                                required
                            />
                        </div>
                        <div className="flex-fill">
                            <Input
                                name={"phone"}
                                nameText={"Телефон"}
                                register={register}
                                defaultValue={student.phone}
                                errors={errors}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <Input
                            name={"contract"}
                            nameText={"Контракт"}
                            register={register}
                            defaultValue={student.contract}
                            errors={errors}
                            required
                        />
                    </div>
                    <Button
                        type={"submit"}
                        color={"success"}
                        buttonText={"Обновить студента"}
                        marginLeft={"d-block ms-auto"}
                    />
                </form>
            </Modal>
        </>
    )
}

export default StudentPage