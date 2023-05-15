import { render } from '@testing-library/react';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'

export const App = () => {
  return (
    <>
    <Searchbar />
      <ImageGallery />
      </>
  )
}