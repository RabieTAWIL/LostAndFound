import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import styles from './styles.module.css'

const content =[
  {title: 'Hello World',image:'#',description:'D1',button:'B1'},
  {title: 'Hello Kasim',image:'#',description:'D1',button:'B1'},
  {title: 'Hello Halil',image:'#',description:'D1',button:'B1'},
];

function SuccessStory() {
	return (
    <div>
      <Slider autoplay={3000}>
        {content.map((items) => (
          <div
            key='Hello World'
            style={{ background: `url('${items.image}') no-repeat center center` }}
          >
            <div className={styles.content}>
              <h1>{items.title}</h1>
              <p>{items.description}</p>
              <button>{items.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
	);
}

export default SuccessStory;
