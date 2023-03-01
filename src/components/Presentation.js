import React from 'react'

// ----- 
// Images 
// ----- 
import Cloud from "../images/nuage.svg"

export default function Presentation() {
    return (
        <section id="presentation">

            <div className="text-container">
                <h1>Classement des meilleures offres <b>d'assurance vie</b></h1>
                <ul>
                    <li><span>Retrouvez une sélection des meilleurs contrats du marché.</span></li>
                    <li><span>Sécurité ou dynamisme : à chaque profil le contrat qui correspond à ses besoins.</span></li>
                    <li><span>Votre documentation immédiate, gratuite et sans engagement.</span></li>
                </ul>
            </div>

            <div id="caracter-illustration"></div>

            <img src={Cloud}
                alt="nuage bleu"
                id="cloud-illustration"
            />

        </section>
    )
}
