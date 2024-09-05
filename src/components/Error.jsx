import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    // console.log(err);
    return(
        <div>
            <br /><br />
            <h1>Oops...</h1>
            <h2>Something went wrong!!!</h2>
            <br /><br />
            
            <h3>
                {err.data}
            </h3>
            <br /><br />
            <p>{err.status} - {err.statusText}</p>
        </div>
    );
}

export default Error;