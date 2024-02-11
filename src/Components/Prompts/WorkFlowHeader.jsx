/* eslint-disable react/prop-types */
import plus_button from '../../assets/plus-btn.png';

const WorkFlowHeader = ({ handleWorkFlow }) => {
    return (
        <>
            <div className='text-center' onClick={handleWorkFlow}>
                <h1 className=" text-[34px] text-[#0D0D0E]  font-bold mb-[16px] "> Data Work Flow Map  </h1>
                <button className='mb-[7px]'><img src={plus_button} alt="" /></button>
            </div>

        </>
    )
}

export default WorkFlowHeader