import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DefinitionSearch from '../components/DefinitionSearch';
import NotFoundComponent from '../components/NotFound';

export default function Definition() {
  const [meanings, setMeanings] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);


  const { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //const url = 'http://httpstat.us/500';
    const url =  `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } 
        else if (response.status === 401){
          navigate('/login')
        }
          else if (response.status === 500){
            setError(true)
          } 

          if (!response.ok){
            setError(true);
            throw new Error('Something went wrong');
          }
          return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setMeanings(data[0].meanings);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search, navigate]);

  if (notFound === true) {
    return (
      <div className="bg-purple-300 min-h-screen px-3 py-3">
      <>
        <NotFoundComponent/>
        <Link to='/dictionary'>Search Another Word</Link>
      </>
      </div>
    );
  }

  if (error === true) {
    return (
      <div className="bg-purple-300 min-h-screen px-3 py-3">
      <>
        <p>Something went wrong, try again? </p>
        <Link to='/dictionary'>Search Another Word</Link>
      </>
      </div>
    );
  }


  return (
    <div className="bg-purple-300 min-h-screen px-3 py-3">
      {meanings.length > 0 && (
        <>
          <h1>Definition:</h1>
          {meanings.map((meaning, index) => (
            <p key={index}>
              {meaning.partOfSpeech}: {meaning.definitions[0].definition}
            </p>
          ))}
          <p>Search Again:</p>
          <DefinitionSearch/>

        </>
      )}
    </div>
  );
}






