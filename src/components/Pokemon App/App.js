import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import PokemonList from './Pokemon App/PokemonList'
import Pagination from './Pokemon App/Pagination'

function App() {
    const [pokemon , setPokemon] = useState([])
    const [currentPageUrl , setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl , setNextPageUrl] = useState()
    const [prevPageUrl , setPrevPageUrl] = useState()
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        let cancel;
        setLoading(true)
        axios.get(currentPageUrl , {
            cancelToken : new axios.CancelToken(c => cancel = c)
        })
        .then(response =>{
            setLoading(false)
            setNextPageUrl(response.data.next)
            setPrevPageUrl(response.data.previous)
            setPokemon(response.data.results.map(p => p.name))
        }).catch(error => console.log(error))


        return ()=> cancel()

    },[currentPageUrl])

    if (loading) return 'Loading...' 

    function goToNextPage(){
        setCurrentPageUrl(nextPageUrl)
    }
    function goToPrevPage(){
        setCurrentPageUrl(prevPageUrl)
    }

  return (
    <React.Fragment>
        <PokemonList pokemon = {pokemon}/>
        <Pagination 
        goToNextPage = {nextPageUrl ? goToNextPage : null} 
        goToPrevPage = {prevPageUrl ? goToPrevPage : null}
        />
    </React.Fragment>
  )
}

export default App