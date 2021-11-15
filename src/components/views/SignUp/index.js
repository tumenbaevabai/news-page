const SignUp = () => {
    return (
        <div className="w-50 my-0 mx-auto" >
            <main className="form-signin">
                <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                </form>
            </main>
        </div>
    )
}

export default SignUp