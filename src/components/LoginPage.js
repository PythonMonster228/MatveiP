import axios from "axios";
import { useState } from "react";


function LoginPage(){
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });
    const {login, password} = formData
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}) 
    const onSubmit = e => {
        e.preventDefault();
        const options = {
            // headers: {
            //     'Accept':'application/json',
            //     'Content-Type': 'application/json'
            // },
            // method: 'POST',
            // withCredentials: 'true',
        }
        const body = JSON.stringify({login, password})
        axios.post('https://65a2bd4042ecd7d7f0a82886.mockapi.io/users', {
            login, password
        })
    };
    return(
        <div>
        <h1 className='content p-50'>Авторизуйтесь в системе:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label className='form-label'>Введите логин</label>
                    <input
                        className='form-group textarea'
                        type='text'
                        placeholder='Логин'
                        name='login'
                        onChange={e => onChange(e)}
                        value={login}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Введите пароль:</label>
                    <input
                        className='form-group textarea'
                        type='text'
                        placeholder='Пароль'
                        name='password'
                        onChange={e => onChange(e)}
                        value={password}
                        required
                    />
                </div>
                <button className='btn btn-primary mt-3' type='submit'>Добавить</button>
            </form>
        </div>
    );
};

export default LoginPage;