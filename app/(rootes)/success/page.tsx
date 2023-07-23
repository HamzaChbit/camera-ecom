
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'



export default function Success() {


  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>

        <h2>Thank you for your order</h2>
        <p className='email-msg'>Check your email inbox for the receipt.</p>
        <p className='description'>
          If you have any questions, please email
          <a className='email' href='mailto:info@emanuelefavero.com'>
           hamzachbit@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='button'  className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}