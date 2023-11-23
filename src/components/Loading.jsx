import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/loading.css';

export const Loading = ({color}) => {
    return ( 
        <div className="spinner-padre">
            <div className="spinner-hijo">
                <Spinner color="warning" className="spinner-CambioDiseno" />
            </div>
        </div>
        )
}