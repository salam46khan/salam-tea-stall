import { useState } from 'react';
import MiddleTitle from '../../../Components/MiddleTitle';
import TeaItem from '../../../Components/TeaItem/TeaItem';
import './Tea.css'
import { useEffect } from 'react';
const Tea = () => {
    const [tea, setTea] = useState([]);
    useEffect(()=>{
        fetch('TeaType.json')
        .then(res => res.json())
        .then(data => setTea(data))
    },[])
    return (
        <div className='tea py-12 px-3'>
            <div className='container mx-auto'>
                <MiddleTitle
                    title={'Tea Features'} 
                    subtitle={'Indulge in an exquisite symphony of flavors with our meticulously curated tea collection, where every sip is a voyage into unparalleled taste and refinement.'}>

                </MiddleTitle>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 mt-8'>
                    {
                        tea.map(item => <TeaItem item={item} key={item.id}></TeaItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tea;