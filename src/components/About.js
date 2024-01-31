import React from "react";
import familyPhoto from './images/familyPhoto.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about' id="about">
            <div className='container'>
                <img id= "family-photo" src={familyPhoto} alt='family-photo'/>
                <div className='col-2'>
                    <h2>Artezano Rústico</h2>
                    <span className='line'></span>
                    <p>
                        No início, éramos apenas um sonho, uma visão de transformar madeiras nobres em obras de arte funcionais. 
                        Enfrentamos desafios financeiros, técnicos e logísticos que poderiam ter desencorajado os menos ousados. 
                        No entanto, cada dificuldade foi encarada como uma oportunidade de aprendizado e crescimento. Acreditamos que a verdadeira superação reside na capacidade de transformar desafios em degraus para o sucesso.
                        <br></br>
                        <br></br>
                        A jornada para estabelecer nosso nome no mercado não foi fácil, mas cada peça produzida refletia nosso compromisso com a qualidade e a originalidade. 
                        Cada móvel, cada projeto, era mais do que uma simples peça de madeira, era a materialização do nosso empenho, paixão e dedicação. 
                        Ao entregar trabalhos de alta qualidade, conquistamos a confiança e admiração de clientes que reconhecem e valorizam nosso compromisso com a excelência.
                        <br></br>
                        <br></br>
                        Hoje, a Artezano Rústico é mais do que uma empresa, é uma marca sinônimo de superação e excelência. 
                        Nossa jornada nos ensinou que o sucesso é uma mistura de resiliência, paixão e um compromisso inabalável com a qualidade. 
                        Continuamos a desafiar os limites do possível, explorando novas ideias e técnicas, sempre com a meta de superar as expectativas dos nossos clientes.                         
                    </p>

                    <p>
                        Que nossa jornada inspire outros a acreditar no poder da paixão pelo trabalho, na busca pela excelência e na capacidade de superar qualquer desafio que surja no caminho.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;