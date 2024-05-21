//popup conmpontnet data template

// interface PopUpProps {
    //     setPopUpclick: React.Dispatch<React.SetStateAction<boolean>>,
    //     setLoginPopUp:React.Dispatch<React.SetStateAction<boolean>>,
    //     loginpopup: boolean
    //   }
    // export default function PopUp(props: PopUpProps) {
    //     return (
    //         <section className='popup popup_login'>
    //            <div className='overlay' onClick={() => {props.setPopUpclick(false)}}></div>
    //            <div className='container'>
    //            <button className='buttnx' onClick={() => {props.setPopUpclick(false)}}>
    //                 X
    //             </button>
    //             {props.loginpopup ? <>
    //             <h3>Войти</h3>
    //             <Form>
    //                 <input placeholder='Email' className='input_style'></input>
    //                 <input placeholder='Password' className='input_style'></input>
    //                 <button type="button" className='buttn_login'>Войти</button>
    //                 <button type="button" onClick={() => {props.setLoginPopUp(false)
    //                 }}>Завести Аккаунт</button>
    //                 <a>Забыли пароль?</a>
    //                 </Form>
    //             </>
    //             :
    //             <>
    //             <h3>Регистрация</h3>
    //             <Form>
    //                 <input placeholder='Nickname' className='input_style'></input>
    //                 <input placeholder='Email' className='input_style'></input>
    //                 <input placeholder='Password' className='input_style'></input>
    //                 <input placeholder='Confirm Password' className='input_style'></input>
    //                 <button type="button" >Регистрация</button>
    //                 <button type="button" onClick={() => {props.setLoginPopUp(true)
    //                 }}>Уже есть Аккаунт?</button>
    //             </Form>
    //             </>}
    
    //             </div>
    //         </section>
          
    //     )
    // }


//import router в дочерний маршрут (жанр)
    // import { useParams, useLocation } from "react-router-dom"
// export default function Genre() {
//     // const { name } = useParams();
//     // const { state } = useLocation();

//     // console.log(state);
//     return (
//         <section>
//             <h3>Жанр</h3>
//             {/* <p>{state.name}</p>
//             <img src={state.cover} /> */}
//         </section>
//     )
// };