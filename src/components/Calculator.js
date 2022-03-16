import './Calculator.css'
import PropTypes from 'prop-types';
import React from 'react';

export const ShowResult = (props) => {
  const {result} = props;
  return (
  <div className='result-container'>
    <p className='result'>{result}</p>
  </div>);
}

ShowResult.defaultProps = { result: 0};
ShowResult.propTypes = { result: PropTypes.number};

export const KeyCalc = (props) => {
  const { eachKey } = props;
  return (
    <input type='button' className='eachKey'>{eachKey}</input>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operation: 0};
    this.myKeys = [
      {
        eachKey: 'AC',
      },
      {
        eachKey: '+/-',
      },
      {
        eachKey: '%',
      },
      {
        eachKey: '/',
      },
      {
        eachKey: '7',
      },
      {
        eachKey: '8',
      },
      {
        eachKey: '9',
      },
      {
        eachKey: 'x',
      },
      {
        eachKey: '4',
      },
      {
        eachKey: '5',
      },
      {
        eachKey: '6',
      },
      {
        eachKey: '-',
      },
      {
        eachKey: '1',
      },
      {
        eachKey: '2',
      },
      {
        eachKey: '3',
      },
      {
        eachKey: '+',
      },
      {
        eachKey: '0',
      },
      {
        eachKey: '.',
      },
      {
        eachKey: '=',
      },
    ];
  }

  
}

