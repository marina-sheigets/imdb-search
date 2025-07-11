import Heading from '../Heading/Heading'
import './SearchResultsComponent.css'
import SectionComponent from '../SectionComponent/SectionComponent'

function SearchResultsComponent() {
  return (
    <SectionComponent>
        <Heading text="Search Results" variant='h2' color='secondary' align='left'/>
    </SectionComponent>
  )
}

export default SearchResultsComponent