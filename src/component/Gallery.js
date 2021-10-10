import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../css/gallery.css';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import NavBar from './Navbar';
import FooterSection from './Footer';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class GurudevGallery extends React.Component {
  render() {
    return (
    <>
    <NavBar/>
    <ImageGallery items={images} />
    <FooterSection/>
    </>
    );
  }
}

export default GurudevGallery;