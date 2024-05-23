import React from 'react'
import { Link } from 'react-router-dom';
import Img1 from './Img1';
import Img3 from './Img3';
import Img4 from './Img4';
import Img5 from './Img5';
import Img6 from './Img6';
import Img7 from './Img7';
import Img8 from './Img8';
import Img9 from './Img9';
import Img10 from './Img10';

const Navigation = () => {
  return (
    <div>
        <Link to="/img1">
            <figure>
                <Img1 />
                <figcaption>Paisajes uno</figcaption>
            </figure>
        </Link>
        <Link to="/img3">
            <figure>
              <Img3 />
              <figcaption>Paisajes tres</figcaption>
            </figure>
        </Link>
        <Link to="/img4">
            <figure>
              <Img4 />
              <figcaption>Paisajes cuatro</figcaption>
            </figure>
        </Link>
        <Link to="/img5">
            <figure>
              <Img5 />
              <figcaption>Paisajes cinco</figcaption>
            </figure>
        </Link>
        <Link to="/img6">
            <figure>
              <Img6 />
              <figcaption>Paisajes seis</figcaption>
            </figure>
        </Link>
        <Link to="/img7">
            <figure>
              <Img7 />
              <figcaption>Paisajes siete</figcaption>
            </figure>
        </Link>
        <Link to="/img8">
            <figure>
              <Img8 />
              <figcaption>Paisajes ocho</figcaption>
            </figure>
        </Link>
        <Link to="/img9">
            <figure>
              <Img9 />
              <figcaption>Paisajes nueve</figcaption>
            </figure>
        </Link>
        <Link to="/img10">
            <figure>
              <Img10 />
              <figcaption>Paisajes diez</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation
