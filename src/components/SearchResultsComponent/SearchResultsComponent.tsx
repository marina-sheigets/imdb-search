import Heading from '../Heading/Heading'
import './SearchResultsComponent.css'
import SectionComponent from '../SectionComponent/SectionComponent'

function SearchResultsComponent() {
    const amountMoviesFound = 0; // This should be replaced with actual logic to get the number of movies found
  return (
    <SectionComponent>
        <div className='search-results-header'>
        <Heading text="Search Results" variant='h2' color='secondary' align='left'/>
        <Heading text={`${amountMoviesFound} movies found`} variant='h3' color='tertiary' align='right'/>
        </div>
    </SectionComponent>
  )
}

export default SearchResultsComponent