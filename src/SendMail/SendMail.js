import React from 'react';
import './SendMail.css'
import { Close } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
//useDispatch() 用來Dispatch action
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

const SendMail = () => {
    const dispatch = useDispatch()

    //這些都是useForm 本來就有的變數
    //register用來決定是否ㄧ定要輸入東西
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    //handleSubmit : 取得user輸入表格的資料
    //consolo log :{To: "ddd", Subject: "ddd", Message: "ddd"}
    const onSubmit = (data)=>{
        console.log(data)
    }

    return (
        <div className='SendMail'>
            <div className='SendMail-Header'>
                <h3>New Message</h3>
                <Close onClick={()=>dispatch(closeSendMessage())} />
            </div>
            


            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                placeholder='To' type='email' 
                {...register('To', { required: true })}
                />
                {errors.To && <p className='err'>To is required</p>}

                <input  placeholder='Subject' type='text' 
                {...register('Subject', { required: true })}
                />
                {errors.Subject && <p className='err'>Subject is required</p>}

                <input  className='sendMail-message' placeholder='Message..' type='text' 
                {...register('Message', { required: true })}
                />
                {errors.Message && <p className='err'>Message is required</p>}

                <div className='sendMail_option'>
                    <Button type='submit' className='sendMail-btn'
                    onClick={()=>dispatch(closeSendMessage())}
                    >SEND</Button>
                </div>
            </form>
            
        </div>
    );
};

export default SendMail;