import React from 'react';
import './Home.css';

function Home({ setView }) {
     return ( <div> 
        <h1>Bienvenido a la App de Recetas</h1>
         <button onClick={() => setView('create-recipe')}>Crear Receta</button> 
         </div> 
         ); 
         }

export default Home

