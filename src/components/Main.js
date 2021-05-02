import 
  React, { 
  useCallback,
  useState 
} from 'react';

const Main = () => {

  const [currentInputValue, setCurrentInputValue] = useState('0.00');
  const [inputValue1, setInputValue1] = useState('0.00');
  const [inputValue2, setInputValue2] = useState('0.00');
  const [operator, setOperator] = useState('');

  const display = useCallback((value) => {
    const modifiedValue = value === '.' 
      ? parseFloat(currentInputValue).toFixed(2)
      : parseFloat(value)
    ;
    setCurrentInputValue(modifiedValue);
    return (
      operator !== ''
        ? setInputValue2(modifiedValue) 
        : setInputValue1(modifiedValue)
      );
  }, [currentInputValue, operator]);

  const calculate = () => {
    const difference = (parseFloat(inputValue1) - parseFloat(inputValue2)).toFixed(2);
    const quotient = (parseFloat(inputValue1) / parseFloat(inputValue2)).toFixed(2);
    const product = (parseFloat(inputValue1) * parseFloat(inputValue2)).toFixed(2);
    const sum = (parseFloat(inputValue1) + parseFloat(inputValue2)).toFixed(2);
    
    switch(operator) {
      case '+':
        setCurrentInputValue(sum);
        setInputValue1(sum);
        break;
      case '-':
        setCurrentInputValue(difference);
        setInputValue1(difference);
        break;
      case '*':
        setCurrentInputValue(product);
        setInputValue1(product);
        break;
      case '/':
        setCurrentInputValue(quotient);
        setInputValue1(quotient);
        break;
      default:
        break;
    }
    
    setInputValue2('0.00');
    setOperator('');
  };

  const clear = useCallback(() => {
    setCurrentInputValue('0.00');
    setInputValue1('0.00');
    setInputValue2('0.00')
    setOperator('');
  }, []);

  return (
    <div
      className='row justify-content-center py-5 my-5 w-100'
    >
      <div 
        className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'
        style={{
          backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
        }}
      >
        <h1>React Calculator</h1>
        <table
          className='table'
        >
          <tr>
            <td colSpan='3'>
              <input
                onChange={(e) => display(e.target.value)}
                type='number'
                value={currentInputValue}
              />
            </td>
            <td>
              <button
                onClick={() => clear()}
              >
                C
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => display(1)}
              >
                1
              </button>
            </td>
            <td>
              <button
                onClick={() => display(2)}
              >
                2
              </button>
            </td>
            <td>
              <button
                onClick={() => display(3)}
              >
                3
              </button>
            </td>
            <td>
              <button
                onClick={() => setOperator('/')}
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => display(4)}
              >
                4
              </button>
            </td>
            <td>
              <button
                onClick={() => display(5)}
              >
                5
              </button>
            </td>
            <td>
              <button
                onClick={() => display(6)}
              >
                6
              </button>
            </td>
            <td>
              <button
                onClick={() => setOperator('-')}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => display(7)}
              >
                7
              </button>
            </td>
            <td>
              <button
                onClick={() => display(8)}
              >
                8
              </button>
            </td>
            <td>
              <button
                onClick={() => display(9)}
              >
                9
              </button>
            </td>
            <td>
              <button
                onClick={() => setOperator('+')}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => display('.')}
              >
                .
              </button>
            </td>
            <td>
              <button
                onClick={() => display(0)}
              >
                0
              </button>
            </td>
            <td>
              <button
                onClick={() => calculate(inputValue1, inputValue2, operator)}
              >
                =
              </button>
            </td>
            <td>
              <button
                onClick={() => setOperator('*')}
              >
                *
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Main;
