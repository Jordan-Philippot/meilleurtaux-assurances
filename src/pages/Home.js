import React, { useState, useEffect } from 'react'

// ----- 
// Components 
// -----
import Presentation from '../components/Presentation'
import Loader from '../components/Loader'
import Offer from '../components/Offer'

// ----- 
// Services 
// -----
import { getData } from '../services/data'

export default function Home() {

  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getData(setResponse, setLoading, setError)
  }, [])

  return (
    <main id="homepage">

      <Presentation />

      <div className="container-fluid">
        {(() => {
          if (error) {

            return <div className="error-container">Une erreur est survenue, veuillez contacter le support.</div>

          } else if (loading) {

            return <Loader />;

          } else if (response.length > 0 && !loading) {

            return response.map((data, index) => {
              return <Offer data={data} key={index} />
            })

          }
        })()}
      </div>
    </main>
  )
}
