import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
  return (
    <div className="CircleSelector">
      <button className={props.circle === 1 ? 'selected' : ''}
        onClick={() => props.selectCircle(1)}>
        {props.circle === 1 ?
          'CIRCLE 1 SELECTED'
          :
          'SELECT CIRCLE 1'
        }
      </button>
      <button className={props.circle === 2 ? 'selected' : ''}
        onClick={() => props.selectCircle(2)}>
        {props.circle === 2 ?
          'CIRCLE 2 SELECTED'
          :
          'SELECT CIRCLE 2'
        }
      </button>
      <button className={props.circle === 3 ? 'selected' : ''}
        onClick={() => props.selectCircle(3)}>
        {props.circle === 3 ?
          'CIRCLE 3 SELECTED'
          :
          'SELECT CIRCLE 3'
        }
      </button>
      <button className={props.circle === 4 ? 'selected' : ''}
        onClick={() => props.selectCircle(4)}>
        {props.circle === 4 ?
          'CIRCLE 4 SELECTED'
          :
          'SELECT CIRCLE 4'
        }
      </button>
    </div>
  )
}

export default CircleSelector;