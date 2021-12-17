export const Footer = () => {

    return (
        <footer className='footer'>
        <section className='footer-links'>
            <a href ='mailto:rachaelcarroll.m@gmail.com'><img src={'https://i.ibb.co/HCqybSP/mail-2.png'} className='footer-icon' alt='email icon'/></a>  
            <a href ='https://github.com/rachaelcarroll' target='_blank' rel='noreferrer'><img src={'https://i.ibb.co/NyYsL14/github-2.png'} className='footer-icon' alt='github logo'/></a>  
            <a href ='https://www.linkedin.com/in/rachaelcarroll/' target='_blank' rel='noreferrer'><img src={'https://i.ibb.co/fqvzWXm/linkedin-4.png'} className='footer-icon' alt='linkedin logo'/></a>  
        </section>
        <p>designed and developed by rachael carroll © {new Date().getFullYear()}</p>
        </footer>
    )
}
