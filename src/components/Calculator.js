import './Calculator.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const ShowResult = (props) => {
  const { result } = props;
  return (
    <div className="result-container">
      <p className="result">{result}</p>
    </div>
  );
};

ShowResult.defaultProps = { result: '0' };
ShowResult.propTypes = { result: PropTypes.string };

const KeyCalc = (props) => {
  const { eachKey, myClass, myClick } = props;
  return (
    <input type="button" className={`eachKey my-${eachKey} ${myClass}`} value={eachKey} onClick={myClick} />
  );
};

KeyCalc.defaultProps = {
  eachKey: '0',
  myClass: 'general',
  myClick: () => {},
};
KeyCalc.propTypes = {
  eachKey: PropTypes.string,
  myClass: PropTypes.string,
  myClick: PropTypes.func,
};

const Calculator = () => {
  const [myState, SetMyState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const myKeys = [
    {
      eachKey: 'AC',
      myClass: 'general',
    },
    {
      eachKey: '+/-',
      myClass: 'general',
    },
    {
      eachKey: '%',
      myClass: 'general',
    },
    {
      eachKey: '÷',
      myClass: 'operator',
    },
    {
      eachKey: '7',
      myClass: 'number',
    },
    {
      eachKey: '8',
      myClass: 'number',
    },
    {
      eachKey: '9',
      myClass: 'number',
    },
    {
      eachKey: 'x',
      myClass: 'operator',
    },
    {
      eachKey: '4',
      myClass: 'number',
    },
    {
      eachKey: '5',
      myClass: 'number',
    },
    {
      eachKey: '6',
      myClass: 'number',
    },
    {
      eachKey: '-',
      myClass: 'operator',

    },
    {
      eachKey: '1',
      myClass: 'number',

    },
    {
      eachKey: '2',
      myClass: 'number',

    },
    {
      eachKey: '3',
      myClass: 'number',

    },
    {
      eachKey: '+',
      myClass: 'operator',

    },
    {
      eachKey: '0',
      myClass: 'number',

    },
    {
      eachKey: '.',
      myClass: 'general',

    },
    {
      eachKey: '=',
      myClass: 'operator',

    },
  ];

  const handleOperation = (e) => {
    const updatedState = calculate(myState, e.target.value);
    SetMyState(updatedState);
  };

  const showNewTotal = () => {
    const { total, next } = myState;
    if (total === null && next === null) {
      return '0';
    }
    if (next === null) {
      return total;
    }
    return next;
  };

  return (
    <div className="mayorContainer">
      <div>
        <h2>Let's do some math!</h2>
      </div>
      <div className="calContainer">
        <ShowResult result={showNewTotal()} />
        <div className="keyContainer">
          {myKeys.map((element) => (
            <KeyCalc
              eachKey={element.eachKey}
              myClass={element.myClass}
              key={element.eachKey}
              myClick={handleOperation}
            />

          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
