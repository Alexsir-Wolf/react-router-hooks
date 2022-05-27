import {React, useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

function calcFactorial (num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n == 0) return 1
    return calcFactorial(n - 1) * n
}

function isPar(num){
    const n = parseInt(num)
    if(n % 2 === 0) return "Par"
    }

const UseEffect = (props) => {
    //Fatorial
    const [number, setNumber] = useState(1);
    const [factorial, setfactorial] = useState(1);

    useEffect(function(){
        setfactorial(calcFactorial(number))
    }, [number])


    //Par ou Impar
    const [numberParOuImpar, setNumberParOuImpar] = useState(1);
    const [parOuImpar, setParOuImpar] = useState(1);
    
    useEffect(function(){
        setParOuImpar(isPar(numberParOuImpar))
    }, [numberParOuImpar])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />            <SectionTitle 
                title="Exercício #01"
            />
            <div>
                <span className="text">Fatorial:</span>
                <span className="text red">{factorial === -1 ? "Não existe fatorial de número negativo." : factorial}</span>
            </div>
            <div className='center'>
                <input 
                    type="number" 
                    className="input" 
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    />
                    <br />
            </div>
            <SectionTitle 
                title="Exercício #02"
            />
            <div>
                <span className="text">Par ou Ímpar:</span>
                <span className="text red">{parOuImpar ? "Par" : "Ímpar"}</span>
            </div>
            <div className='center'>
                <input 
                    type="number" 
                    className="input" 
                    value={numberParOuImpar}
                    onChange={e => setNumberParOuImpar(e.target.value)}
                    />
                    <br />
            </div>

        </div>
    )
}

export default UseEffect
