import { useParams, useLocation} from "react-router-dom"
export default function Genre() {
    const {genre} = useParams()
    const {state} = useLocation()
    return (
        <section>
            <h3>Жанр</h3>
            <p>{genre}</p>
            <img src={state.cover}/>
        </section>
    )
};