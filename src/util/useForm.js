import { useState } from 'react'

const useForm = (callback, initialState) => {
    const [inputs, setInputs] = useState(initialState)

    const changeHandler = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    const submitHandler = e => {
        e.preventDefault();
        callback()
        setInputs(initialState)
    }

    return {
        changeHandler,
        submitHandler,
        inputs
    }

}

export default useForm