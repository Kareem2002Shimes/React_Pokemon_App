import React from 'react'

function Pagination({goToNextPage , goToPrevPage}) {
  return (
    <div>
        {goToNextPage &&  <button onClick={goToNextPage}>Next Page</button>}
        {goToPrevPage && <button onClick={goToPrevPage}>Prev Page</button>}
    </div>
  )
}

export default Pagination