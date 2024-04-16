import InteractiveCard from './InteractiveCard';
import Image from 'next/image'

export default function productcard( {carName,imgSrc,tel,openningtime,onCompare} : 
    {carName : string, imgSrc: string, tel: string, openningtime: string, onCompare?:Function} ) { 
    
    return (
        <InteractiveCard contentName={carName}>          
            <div className='w-full h-[70%] relative rounded-t-lg '>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg '
                />
            </div>
            <div>
                <div className='w-full h-[9%] p-[5px] font-bold px-5'>{carName}</div>
                <div className='w-full h-[6%] p-[3px] px-5'>{tel}</div>
                <div className='w-full h-[6%] p-[0px] px-5'>{openningtime}</div>
            </div>
            {
                onCompare? <button className='block h-[10%] text-sm rounded-md bg-sky-600 hover:bg-ingigo-600 mx-2 px-1 py-1 text-white'
                onClick={ (e)=> {e.stopPropagation(); e.preventDefault(); onCompare(carName)}}>Compare</button> : ''
            }
            
        </InteractiveCard>
       
    );
}