import React, { useState } from 'react';
import './style.css'

function Calculator() {
    const [currentResult, setCurrentResult] = useState('');
    const [operatorClicked, setOperatorClicked] = useState(false);
    const [previousResult, setPreviousResult] = useState('');
    const [lastParenthesis, setLastParenthesis] = useState('');

    function appendToResult(value) {
        if (operatorClicked) {
            setCurrentResult(previousResult);
            setOperatorClicked(false);
        }
        let displayValue = value;
        if (value === '*') {
            displayValue = '×';
        } else if (value === '/') {
            displayValue = '÷';
        }
        if (!('+/*-'.includes(currentResult.slice(-1)) && '+/*-'.includes(value))) {
            setCurrentResult(currentResult + value);
        }
        if (value === '(' && currentResult.slice(-1) === '(') {
            setCurrentResult(currentResult + ')');
        }
    }

    function clearAll() {
        setCurrentResult('');
        setPreviousResult('');
    }

    function clearEntry() {
        setCurrentResult(currentResult.slice(0, -1));
    }

    function calculate() {
        try {
            const result = eval(currentResult).toString();
            setPreviousResult(result);
        } catch (error) {
            setPreviousResult('Error');
        }
        setOperatorClicked(true);
    }

    function usePreviousResult(operator) {
        setCurrentResult(previousResult + operator);
    }

    function toggleParenthesis() {
        const lastTwoChars = currentResult.slice(-2);
        const lastChar = currentResult.slice(-1);
        if (lastTwoChars === '()' || lastTwoChars === ')(') {
            setCurrentResult(currentResult.slice(0, -2));
        } else if (lastChar === '(') {
            setCurrentResult(currentResult.slice(0, -1) + ')');
        } else {
            setCurrentResult(currentResult + '(');
        }
    }

    return (
        <div className="Calculator">
            <div className="section" id="section8">
                <div className="content">
                    <div className="divNavSection">
                        <p className="text2 text10">Calculator (demo)</p>
                    </div>
                    <div className="groupText1">
                        <hr />
                        <div className="divText">
                            <p className="text4 text9" id="showslive">{currentResult}</p>
                        </div>
                        <hr />
                        <div className="divText">
                            <p className="text4 text9" id="results">{previousResult}</p>
                        </div>
                        <hr />
                        <br />
                        <div className="divKeys">
                            <div className="key text8" onClick={clearAll}>C</div>
                            <div className="key text8" onClick={clearEntry}>CE</div>
                            <div className="key text8 text08" onClick={() => appendToResult('-')}>-</div>
                            <div className="key text8 text08" onClick={() => appendToResult('+')}>+</div>
                            <div className="key text8" onClick={() => appendToResult('7')}>07</div>
                            <div className="key text8" onClick={() => appendToResult('8')}>08</div>
                            <div className="key text8" onClick={() => appendToResult('9')}>09</div>
                            <div className="key text8 text08" onClick={() => appendToResult('/')}>÷</div>
                            <div className="key text8" onClick={() => appendToResult('4')}>04</div>
                            <div className="key text8" onClick={() => appendToResult('5')}>05</div>
                            <div className="key text8" onClick={() => appendToResult('6')}>06</div>
                            <div className="key text8 text08" onClick={() => appendToResult('*')}>×</div>
                            <div className="key text8" onClick={() => appendToResult('1')}>01</div>
                            <div className="key text8" onClick={() => appendToResult('2')}>02</div>
                            <div className="key text8" onClick={() => appendToResult('3')}>03</div>
                            <div className="key text8 key1 text08" onClick={calculate}>=</div>
                            <div className="key" onClick={toggleParenthesis}>( )</div>
                            <div className="key text8" onClick={() => appendToResult('0')}>00</div>
                            <div className="key text8" onClick={() => appendToResult('.')}>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
