import './Footer.css'

const Footer = () => {

    return (
        <div className="footerContainer">
            <div className='footerLinks'>
                <a target='_blank' href='https://github.com/Zachary-Kiz'>
                    <img className='footerImage' src='/images/github.png'></img>
                </a>
                <a target='_blank' href='mailto:zachary.kizell@gmail.com'>
                    <img className='footerImage' src='/images/mail.png'></img>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/zachary-kizell-a7021b22b/'>
                    <img className='footerImage' src='/images/linkedin.png'></img>
                </a>
                <a target='_blank' href='https://www.instagram.com/zacharykizell/'>
                    <img className='footerImage' src='/images/instagram.png'></img>
                </a>
                <a target='_blank' href='https://www.goodreads.com/user/show/111472947-zach'>
                    <img className='footerImage' src='/images/goodreads.png'></img>
                </a>
            </div>
            <small>Zachary Kizell — 2025</small>
        </div>
    )
}

export default Footer;