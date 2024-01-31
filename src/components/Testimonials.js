import React from 'react';
import user1 from './images/pergFloripa.jpg';
import user2 from './images/user2.jpeg';
import user3 from './images/user3.jpeg';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Depoimentos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>A Artezano Rústico é satisfação garantida. Preço justo e qualidade excelente. 
                            <br/>O atendimento é o maior diferencial, sempre atenciosos em entender as necessidades 
                            do cliente e propor soluções e alternativas que agregam valor ao produto final. 
                            Sempre que precisar contarei com a Artezano! Recomendo!</p>
                        <p><span>Felipe  de Araujo</span></p>
                        <p>Florianópolis - SC</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque blandit sapien a nibh lobortis vestibulum. 
                            Quisque auctor, velit quis suscipit pellentesque.</p>
                        <p><span>Kate</span></p>
                        <p>Director of ..</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque blandit sapien a nibh lobortis vestibulum. 
                            Quisque auctor, velit quis suscipit pellentesque.</p>
                        <p><span>Paul</span></p>
                        <p>Manager ..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;