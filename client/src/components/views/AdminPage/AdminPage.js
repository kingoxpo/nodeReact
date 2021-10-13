import React,{useEffect} from 'react'
import axios from 'axios';

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
        .then(response => {
            if(response.data.success) {
                props.history.push("/login")                
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
        })
    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>관리자님 안녕하세요.</h2>

            <button onClick={onClickHandler}>
                로그아웃 
            </button>
        </div>
    )
}

export default LandingPage