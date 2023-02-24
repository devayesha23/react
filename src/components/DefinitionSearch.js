import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function DefinitionSearch(){

    const [word, setWord] = useState('');
   const navigate = useNavigate();

   return (
    <div className="bg-purple-300 min-h-screen px-3 py-3">
        <form className= "flex justify-center space-x-2 max-w-[300px]"

        onSubmit={()=>{
        
        navigate('/dictionary/' + word);

        }}
        >
    
    <input className="shrink min-w-0 px-2 rounded py-1"
    placeholder='Type Here'
    type="text"
    onChange={(e) => {

        setWord(e.target.value);

    }} />
    
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">Search</button>
    </form>
    </div>
   );
}