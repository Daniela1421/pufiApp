import React from 'react'
import arrow from "../images/arrow.svg";
import { useForm, ValidationError } from "@formspree/react";

export default function Subscription() {
    const [state, handleSubmit] = useForm("xpznpqgk");
    if (state.succeeded) {
        return <p>Gracias por suscribirte a Pufi! Nos encanta tenerte aquí</p>
    }
  return (
    <div>
         <form
                action="https://formspree.io/f/xpznpqgk"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className="">
                    <input
                        id="email"
                        type="email"
                        className="inpt-newsletter"
                        placeholder="Ingresa tu email"
                        name="email"
                        required
                    ></input>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <button className="btn-newsletter" type="submit" disabled={state.submitting}>
                        <img src={arrow} alt='flecha'></img>
                    </button>
                </div>
            </form>
    </div>
  )
}
