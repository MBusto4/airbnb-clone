import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-2  md:grid-cols-4 gap-y-10 px-32 py-14 
        bg-[#fcf6ee] text-gray-600 shadow-2xl '>
            <div className='space-y-4 text-xs text-'>
                <h5 className='font-bold'>ABOUT</h5>
                <p className='footerOption'>How Airbnb works</p>
                <p className='footerOption'>Newsroom</p>
                <p className='footerOption'>Investors</p>
                <p className='footerOption'>Airbnb Plus</p>
                <p className='footerOption'>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p className='footerOption'>Diversity & Belonging</p>
                <p className='footerOption'>Against Discrimination</p>
                <p className='footerOption'>Accessibility</p>
                <p className='footerOption'>Guest Referrals</p>
                <p className='footerOption'>Gift cards</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p className='footerOption'>Host your home</p>
                <p className='footerOption'>Host an Online Experience</p>
                <p className='footerOption'>Host an Experience</p>
                <p className='footerOption'>Responsible hosting</p>
                <p className='footerOption'>Resource Center</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p className='footerOption'>Our COVID-19 Response</p>
                <p className='footerOption'>Help Center</p>
                <p className='footerOption'>Cancellation options</p>
                <p className='footerOption'>Neighborhood Support</p>
                <p className='footerOption'> Trust & Safety</p>
            </div>

        </div>

    )
}

export default Footer
