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


// старая версия кнопок по жанрам

/* <button className='genre__bigd'>
                <p className='genre__insaded-txt2'> Metal </p>
                <p className='genre__insaded-link'>
                    Открыть
                    <FontAwesomeIcon icon={faArrowRight} />
                </p>
                <div className='genre__insaded-overlay'>

                 </div>
            </button>
             <div className='genre__littled'>
              
                
                <Link to={`/genres/RAP`} state={{name: "rap", albmus: 47, cover: RAP}} className='genre__insaded' style={{backgroundImage:`url(${RAP})`}}>
                    <p className='genre__insaded-txt1'>RAP</p>
                    <p className='genre__insaded-link1'>
                        Открыть
                        <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </Link>
                <button className='genre__insaded' style={{backgroundImage:`url(${INDIE})`}}>
                    <p className='genre__insaded-txt1'>Indie</p>
                    <p className='genre__insaded-link2'>
                        Открыть
                        <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </button>
                <button className='genre__insaded'style={{backgroundImage:`url(${SHOEGAZE})`}}>
                    <p className='genre__insaded-txt1'>ShoeGaze</p>
                    <p className='genre__insaded-link3'>
                        Открыть
                        <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </button>
                <button className='genre__insaded'style={{backgroundImage:`url(${Soundtrack})`}}>
                    <p className='genre__insaded-txt1'>Soundtrack</p>
                    <p className='genre__insaded-link4'>
                        Открыть
                        <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                    <div className='genre__insaded-overlay'>

                    </div>
                </button>
             </div> */