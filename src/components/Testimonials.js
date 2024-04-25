import React from 'react';
import user1 from './images/pergFloripa.jpg';
import user2 from './images/sushiOut.jpeg';
import user3 from './images/sushiArte.jpeg';
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
                        <img src={user2} alt='user2' />
                        <p>Estou extremamente satisfeito com os serviços de estruturas em madeira oferecidos por esta empresa. 
                            A qualidade do trabalho entregue superou todas as minhas expectativas. 
                            Desde o primeiro contato até a conclusão do projeto, fui tratado com profissionalismo e cortesia pela equipe dedicada. 
                            As estruturas em madeira que eles criaram para mim não apenas atendem às minhas necessidades funcionais, mas também adicionam um toque de elegância e estilo ao meu espaço. 
                            Estou verdadeiramente impressionado com a atenção aos detalhes e o compromisso com a excelência demonstrado por esta empresa. 
                            Recomendo seus serviços a qualquer pessoa que esteja procurando por qualidade, durabilidade e beleza em estruturas de madeira</p>
                        <p><span>Dival Müller</span></p>
                        <p>Balneário Camboriú - SC</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user3' />
                        <p>Ótimo atendimento e execução dos projetos em madeira, 
                            seu Idemar tem muita experiência e executou alguns projetos desenvolvidos por nós, 
                            seguindo o desenho e com muita qualidade!</p>
                        <p><span>Mariana Andrade</span></p>
                        <p>Balneário Camboriú - SC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;