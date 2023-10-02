import React  from 'react';

export const Footer = () => {

    return (
        <footer className='footer'>
            <p>designed and developed by rachael carroll © {new Date().getFullYear()}. View the code <span><a href ='https://github.com/rachaelcarroll' target='_blank' rel='noreferrer'>here.</a></span></p>
        </footer>
    )
}
