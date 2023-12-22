import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { validaEmail } from "../helpers/validaEmail";
import { MdOutlineAlternateEmail, MdOutlineVerifiedUser, MdOutlineKeyboardDoubleArrowDown, MdHome } from "react-icons/md";
import { ImCopy } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../services/config';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import '../styles/formOrder.css';

export const FormOrder = () => {
    const { carrito, setCarrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const [someData, setSomeData] = useState(false);
    const [validEmail, setValidEmail] = useState(true);
    const [validName, setValidName] = useState(true);
    const [validPhone, setValidPhone] = useState(true);
    const [orderID, setOrderID] = useState('');
    const [copiedID, setCopiedId] = useState(false);
    const [toolTipCopy, setToolTipCopy] = useState("Copiar");
    
    const [valoresInput, setValoresInput] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleValoresInput = (e) => {
        setSomeData(true);
        if (e.target.name === "email") {
            validaEmail(e.target.value)
                ? setValidEmail(true)
                : setValidEmail(false);
        }
        if (e.target.name === "name") {
            (e.target.value.length > 2 || e.target.value.length === 0)
                ? setValidName(true)
                : setValidName(false);
        }
        if (e.target.name === "phone") {
            (e.target.value.length > 6 || e.target.value.length === 0)
                ? setValidPhone(true)
                : setValidPhone(false);
        }
        setValoresInput({
            ...valoresInput,
            [e.target.name]: e.target.value
        })
    }

    const handleComprar = (e) => {
        e.preventDefault();
        const dataCustomer = {
            name: valoresInput.name,
            email: valoresInput.email,
            phone: valoresInput.phone
        }
        const order = {
            cliente: dataCustomer,
            productos: carrito,
            total: totalCarrito()
        }
        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, order) //graba el contenido del carrito en firestore en la tabla "orders"
            .then((doc) => {
                setOrderID(doc.id); //doc.id es el ID asignado en la tabla orders y se le asigna ese ID a la variable de estado orderID
                setCarrito([]); //vacía el carrito
            })
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(orderID);
        setCopiedId(true);
        setToolTipCopy("Copiado");
    };

    //se hace un early-return cuando orderID tiene asignado un nro de orden

    if (orderID) {
        return (
            <div className="order">
                <MdOutlineVerifiedUser className="order-completed-icon" />
                <h2 className="order-completed-text">Orden Completada</h2>
                <div className="order-thanks">
                    <p className="order-thanks-name">{valoresInput.name}</p>
                    <p className="order-thanks-text">Gracias por su compra!</p>
                </div>
                <p className="order-textID">Su Nº de Orden:</p>
                <MdOutlineKeyboardDoubleArrowDown />
                <div className="order-numberID">
                    <p>{orderID}</p>
                    <Tippy content={toolTipCopy} placement="right">
                        <div>
                            {
                                !copiedID
                                    ? <ImCopy className="order-final-copy" onClick={handleCopy} />
                                    : <IoMdCheckmarkCircleOutline className="order-final-copied" />
                            }
                        </div>
                    </Tippy>
                </div>
                <div className="order-final">
                    <Tippy content="Home" placement="bottom">
                        <div>
                            <MdHome className="order-final-home" onClick={() => vaciarCarrito()} />
                        </div>
                    </Tippy>
                </div>
            </div>
        )
    }

    return (
        <>
            <form className="form" onSubmit={handleComprar}>

                <div className="form-div">
                    <label>Nombre y Apellido</label>
                    <div className="form-div-icons">
                        <FaUserTie className="icons" />
                        <input
                            className="form-name"
                            type="text"
                            value={valoresInput.name}
                            onChange={handleValoresInput}
                            name="name"
                            required
                        />
                    </div>
                    {!validName && <span className="valid-error">Por favor ingresá un Nombre válido</span>}
                </div>

                <div className="form-div">
                    <label>e-Mail</label>
                    <div className="form-div-icons">
                        <MdOutlineAlternateEmail className="icons" />
                        <input
                            className="form-email"
                            type="email"
                            value={valoresInput.email}
                            onChange={handleValoresInput}
                            name="email"
                            required
                        />
                    </div>
                    {!validEmail && <span className="valid-error">Por favor ingresá un formato de e-Mail válido</span>}
                </div>

                <div className="form-div">
                    <label>Teléfono</label>
                    <div className="form-div-icons">
                        <CiPhone className="icons" />
                        <input
                            className="form-phone"
                            type="phone"
                            value={valoresInput.phone}
                            onChange={handleValoresInput}
                            name="phone"
                            required
                        />
                    </div>
                    {!validPhone && <span className="valid-error">Por favor ingresá un Nº de teléfono válido</span>}
                </div>

                <div className="form-total">
                    <p className="form-total-label">Total: </p>
                    <p className="form-total-price">$ {totalCarrito()} </p>
                </div>

                <button className={`${(someData && validName && validEmail && validPhone) ? "form-buy" : "form-buy form-buy-disabled"}`} type="submit">Confirmar Compra</button>
            </form>
        </>
    )
}
