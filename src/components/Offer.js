import React, { useState, useEffect, useRef } from 'react'

// ----- 
// Services 
// -----
import { getMediaType, checkEmailValidity, isFloat } from '../services/helpers'

export default function Offer({ data, index }) {

    const inputRef = useRef();

    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    const [eurosName, setEurosName] = useState("")
    const [eurosPercent, setEurosPercent] = useState("")

    const [unityName, setUnitysName] = useState("")
    const [unityPercent, setUnityPercent] = useState("")

    // ------ 
    // Submit form 
    // ------
    const submitEmail = () => {
        checkEmailValidity(email, inputRef.current, setEmailSent)
    }


    // ----- 
    // Listener media 
    // -----
    useEffect(() => {
        // ------ 
        // Display content based on media type 
        // -----
        getMediaType(setIsMobile)
        window.addEventListener("resize", (e) => {
            getMediaType(setIsMobile)
        });
    }, [])



    useEffect(() => {
        // ----- 
        // If the percentage is less than 0.5, replace the name and percentage with a dash 
        // -----
        if (data.fondEuroPourcentage && data.fondEuroPourcentage > 0.5) {
            let percent = data.fondEuroPourcentage

            if (data.fondEuroPourcentage === 1.9) {
                percent = data.fondEuroPourcentage.toFixed(2)
            }

            setEurosPercent(percent.toString().replace('.', ',') + "%")

            if (data.fondEurosNom) {
                setEurosName(data.fondEurosNom)
            }

        } else {
            setEurosPercent("-")
        }

        if (data.uniteComptePourcentage) {
            // ----- 
            // If the percentage contains a decimal, round to 2 decimals, 
            // and replace the point with a comma 
            // -----
            let percent = data.uniteComptePourcentage
            if (isFloat(data.uniteComptePourcentage)) {
                percent = data.uniteComptePourcentage.toFixed(2)
            }
            setUnityPercent(percent.toString().replace('.', ',') + "%")

            if (data.uniteCompteNom.match('Luxembourg')) {
                setUnitysName(data.uniteCompteNom + " S&P 500")
            } else {
                setUnitysName(data.uniteCompteNom)
            }

        }
        console.log(data)
        // eslint-disable-next-line
    }, [data])

    return (
        <section className="offer" key={index}>

            <div className="offer-data">
                <div className="offer-img">
                    <img src={data?.urlLogo} alt="assurance" />
                </div>

                <div className="dashed-line"></div>

                <div className="euros-container">
                    <p className="title">Fonds euros {!isMobile && "2021"}</p>
                    <p className="name">{eurosName}</p>
                    <p className="percent">{eurosPercent}</p>
                </div>

                <div className="dashed-line"></div>

                <div className="unit-container">
                    <p className="title">{isMobile ? "UC" : "Unité de compte 2021"}</p>
                    <p className="name">{unityName}</p>
                    <p className="percent">{unityPercent}</p>
                </div>
            </div>

            <div className="offer-form">
                {emailSent ?
                    <button className="btn-default btn-success">Documentation envoyée</button>
                    :
                    <>
                        <input
                            type="email"
                            placeholder="Votre email"
                            onChange={(e) => setEmail(e.target.value)}
                            ref={inputRef}
                        />
                        <button className="btn-default btn-primary" onClick={submitEmail}>Recevoir la documentation</button>
                    </>
                }
            </div>
        </section>
    )
}
