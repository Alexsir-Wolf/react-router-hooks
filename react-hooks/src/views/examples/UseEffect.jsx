import {React, useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(0);
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div>
                <span className="text">Fatorial:</span>
                <span className="text red">100</span>
            </div>
            <div className='center'>
                <input 
                    type="number" 
                    className="input" 
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    />
            </div>

        </div>
    )
}

export default UseEffect
