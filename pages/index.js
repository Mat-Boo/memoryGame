import Head from 'next/head';


export default function Home() {
    return (
    <>
        <Head>
        <title>Jeu de mémoire</title>
        <meta name="description" content="Venez découvrir le jeu de mémoire favoris des voyageurs." />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='container bg-light'>
            <h1 className='text-center p-5'>Travel Memory Card</h1>
            <button className='btn btn-primary'>Nouvelle partie</button>
            <button className='btn btn-info'>Règles du jeu</button>
            <div className=''>
                
            </div>
        </div>

    </>
    )
}
