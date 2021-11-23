import { useDispatch } from 'react-redux';
import { makeApiCall, setText } from '../../redux/actions/textAction';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBarWithButton() {

    const dispatch = useDispatch();
    

    const clickHandler = () => {
        const searched_city = document.getElementById("city-search").value;
        if (searched_city === '')
            return;
        document.getElementById("city-search").value = "";
        dispatch(setText(searched_city.toUpperCase()));
        dispatch(makeApiCall(true))
    }

    return (
        <div>
            <input
                type="text"
                id="city-search"
                placeholder="Search User by Name"
                name="q" 
            />
        <button onClick={clickHandler}> Search </button>
        </div>
    )
}

export default SearchBarWithButton
