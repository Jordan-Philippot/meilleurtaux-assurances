import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className='container-fluid' id="notFound">
      <h1> Erreur 404 </h1>
      <p>Page introuvable</p>
      <Link to={"/"} className="btn-default btn-primary">Revenir à l'accueil</Link>
    </main>
  )
}
