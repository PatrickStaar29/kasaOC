import { Link } from 'react-router-dom'

function Probl(){
    return(
        <main className='Probl'>
            <h2 className='Probl__404'>404</h2>
            <h1 className='Probl__message'>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/" className='Probl__retour'>Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Probl