import { useForm } from "react-hook-form";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

import '../styles/FormOrder.css';

export const FormOrder = () => {
    
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    };

  return (
    <>
        <form className="form" onSubmit={handleSubmit(enviar)}>

            <div className="form-div">
                <label>Nombre y Apellido</label>
                <div className="form-div-icons">
                    <FaUserTie className="icons" />
                    <input className="form-name" type="text" placeholder="" required {...register("name")} />
                </div>
            </div>
            <div className="form-div">
                <label>e-Mail</label>
                <div className="form-div-icons">
                    <MdOutlineAlternateEmail className="icons"/>
                    <input className="form-email" type="email" placeholder="" required {...register("email")} />
                </div>
            </div>
            <div className="form-div">
                <label>Teléfono</label>
                <div className="form-div-icons">
                    <CiPhone className="icons"/>
                    <input className="form-phone" type="phone" placeholder="" required {...register("phone")} />
                </div>
            </div>

            <div className="cart-total">
                <p className="cart-total-label">Total: </p>
                <p className="cart-total-price">$ </p>
            </div>

            <button className="form-buy" type="submit">Comprar</button>
        </form>
    </>
  )
}
