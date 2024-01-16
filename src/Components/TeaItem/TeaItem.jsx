import './TeaItem.css'
import front from '../../assets/photo/blck-tea-front.jpg'
import back from '../../assets/photo/back-black-tea.png'
const TeaItem = ({item}) => {
    const {name, price, company} = item
    return (
        <div className='teaCard rounded-md'>
            <div className="front face relative rounded-xl">
                <div className='relative '>
                    <img className='h-[280px] w-full rounded-xl' src={front} alt="" />
                    <div className='rounded-xl absolute left-0 bottom-0 w-full h-[160px] bg-gradient-to-t from-[#000] to-[#fff0]'></div>
                </div>
                <div className="content absolute left-0 bottom-5 text-center w-full">
                    <p className='font-bold text-2xl'>{name}</p>
                </div>
            </div>
            <div className="back face rounded-xl">
                
                <div className="content text-center">
                    <img className='h-[120px]' src={back} alt="" />
                    <p>{company}</p>
                    <p className='text-black text-xl font-thin'>Price: {price} tk</p>
                    <p className='font-bold text-2xl'>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default TeaItem;