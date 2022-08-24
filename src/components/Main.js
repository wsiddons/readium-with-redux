import React from 'react'
import Navbar from './Navbar'
import StoriesList from './StoriesList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStories } from '../store/stories'


function Main() {

  // componentDidMount() {
  //   this.props.loadStories()
  // }
  const dispatch = useDispatch()



  return (
    <div id='main'>
      <div className='column container'>
        <div id='header'>
          <h1>Readium</h1>
        </div>
        <Navbar />
      </div>
      <StoriesList />
    </div>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStories: () => dispatch(fetchStories())
  }
}

export default Main
