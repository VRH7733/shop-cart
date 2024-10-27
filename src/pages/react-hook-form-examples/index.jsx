import { useForm } from "react-hook-form"



export default function ReactHookFormExamplePage() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    function onSubmitForm(formData) {
        console.log(formData)
        reset()
    }

    return (
        <div>
            <h1>React hook form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label>Email</label>
                    <input {...register('email', { required: true })} type="email" name="email" />
                    {
                        errors.email && errors.email.type === 'required' ? (
                            <p>email is required</p>) : null

                    }
                </div>
                <div>
                    <label>Password</label>
                    <input {...register('password', { required: true, minLength: 5 })} type="password" name="password" />
                    {
                        errors.password && errors.password.type === 'required' ? (
                            <p>password is required</p>) : null

                    }
                    {
                        errors.password && errors.password.type === 'minLength' ? (
                            <p>password length to be more than 4 is required</p>) : null

                    }
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}