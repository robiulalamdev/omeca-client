/* eslint-disable react/no-unescaped-entities */
import selectedAi from '../../assets/selectedAi.png';
import blueBar from '../../assets/blue-bar.png';
import plus from '../../assets/plus-btn.png';
import { useState } from 'react';

const AiWorkingData = () => {

    const [textareas, setTextareas] = useState([]);
    const [newTextareaValue, setNewTextareaValue] = useState('');

    const handleOnChange = (e) => {
        setNewTextareaValue(e.target.value);
    };

    const handleClick = () => {
        setTextareas([...textareas, newTextareaValue]);
        setNewTextareaValue('');
        // setTextareas('')
    };
    console.log(textareas)

    return (
        <>
            <div className='mb-[24px]'>
                <div className=' flex justify-center flex-col items-center m-auto'>
                    <div className='text-center'>
                        <img src={selectedAi} alt="" />
                    </div>
                    <div className='text-center mt-[13px] text-sm font-normal text-[#202027ad] leading-[-0.42px] max-w-[526px] w-full '>
                        <p >"At Buraqlab, we're not just a pet care agency; we're devoted designers of well-being for your furry family members. Our commitment to thoughtful, holistic design ensures that every aspect of our services is crafted to create a nurturing and joyful environment for  your pets. Choose Buraqlab for a unique blend of care and design expertise that  elevates your pets' experience to a new level of comfort and happiness."</p>
                    </div>
                </div>
            </div>
            <div className='mb-[24px]'>
                <div className=' flex justify-center flex-col items-center m-auto'>
                    <div className='text-center'>
                        <img className='mb-[24px]' src={blueBar} alt="" />
                    </div>
                    <div className='w-full'>
                        <textarea onChange={handleOnChange}
                            className='p-[20px] bg-[#EEE] border border-[#999EAB] max-w-[556px] w-full h-[144px] rounded-[10px]' type="text" />
                    </div>
                </div>
            </div>

            {/* second text plus one input  */}
            <div className='mb-[24px]'>
                {
                    textareas.map((data, index) => (
                        <>
                            <div className=' flex justify-center flex-col items-center m-auto'>
                                <div className='text-center bg-[#1765FC] py-[13px] text-white rounded-[50%] flex justify-center items-center w-[42px] h-[42px] px-[15px]'>
                                    <p>{index}</p>
                                </div>
                                <div className='text-center mt-[13px] text-sm font-normal text-[#202027ad]  leading-[-0.42px] w-full max-w-[526px] '>
                                    <p>{data}</p>
                                </div>
                            </div>
                            {/*  */}
                            <div className='mb-[24px mt-[24px]'>
                                <div className=' flex justify-center flex-col items-center m-auto'>
                                    <div className='text-center'>
                                        <img className='mb-[24px]' src={blueBar} alt="" />
                                    </div>
                                    <div className='w-full'>
                                        <textarea onChange={handleOnChange}
                                            className='p-[20px] bg-[#EEE] border border-[#999EAB] max-w-[556px] w-full h-[144px] rounded-[10px]' type="text" />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>

            {/* add button */}
            <div className='mb-[24px]'>
                <div className=' flex justify-center flex-col items-center m-auto'>
                    <div onClick={handleClick} className='text-center cursor-pointer'>
                        <img className='mb-[24px]' src={plus} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiWorkingData;