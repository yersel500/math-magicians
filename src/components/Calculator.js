import './Calculator.css';
import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';

const ShowResult = (props) => {
  const { result } = props;
  return (
    <div className="result-container">
      <p className="result">{result}</p>
    </div>
  );
};

ShowResult.defaultProps = { result: 0 };
ShowResult.propTypes = { result: PropTypes.number };

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

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.myKeys = [
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
  }

  handleOperation = (e) => {
    if (e.target.classList.contains('number')) {
      console.log(e.target);
    }
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="mayorContainer">
        <div className="calContainer">
          <ShowResult result={total} />
          <div className="keyContainer">
            {this.myKeys.map((element) => (
              <KeyCalc
                eachKey={element.eachKey}
                myClass={element.myClass}
                key={element.eachKey}
                myClick={this.handleOperation}
              />

            ))}
          </div>
        </div>
      </div>
    );
  }
}
