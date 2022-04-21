import {useRef, useState} from 'react'

function Header() {
  let searchBar = useRef()
  let [search , setSearch] = useState()
  
  function handleSearch(e) {
    let newSearch = searchBar.current.value
    setSearch(newSearch)
  }
  console.log(search)
  return (
    <nav>
    <div className='brand'>BRAND</div>
    <input type="text" name="name" ref={searchBar}/>
    <button onClick={handleSearch} value="popular">Search</button>
    <div className='menu'>MENU</div>
    </nav>  
  )
}

export default Header