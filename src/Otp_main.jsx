import { Intro } from './Components/Intro';
import {Otp} from './Components/Otp'


function Otp_main(){
    return <div className='h-screen bg-blue-700'>
        <Intro/>
        <Otp number={4}></Otp>
    </div>
}
export default Otp_main;