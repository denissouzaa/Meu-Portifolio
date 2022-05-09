import React from 'react';
import Helmet from 'react-helmet';

import NavbarComponent from '../../components/navbar'
import { Container, Button } from 'react-bootstrap';
import IconLinked from '../../assets/icon/linkedin.svg';
import IconGithub from '../../assets/icon/github.svg';

import cupomking from '../../assets/images/cupomking.png';
import tempoweb from '../../assets/images/tempoweb.png';
import driive from '../../assets/images/driive.png';
import frade from '../../assets/images/frade.png';
import baixarvideos from '../../assets/images/baixarvideos.png';


export default function Home() {
    return (
        <>
            <header>
                <Helmet>
                    <title>Início | Denis Souza</title>
                    <meta
                        name="description" content="Portifólio Denis Souza." />
                </Helmet>
                <NavbarComponent />
            </header>
            <main>
                <Container className='pt-5 pb-5'>
                    <div className='col-md-12 caixaCenter'>
                        <div className='verticalCenter'>
                            <p className='m-0'>Olá, eu sou</p>
                            <h1 className='mt-3 mb-3 corDestaque'>Denis Souza</h1>
                            <p>Desenvolvedor Web</p>

                            <div className='pt-3'>
                                <a href='https://www.linkedin.com/in/denis-souzaa/' target='_blank' rel='noreferrer'>
                                    <Button className='buttonDestaque me-1'><img className='me-2' width="20px" src={IconLinked} alt="LinkedIn" />LinkedIn</Button>
                                </a>
                                <a href='https://github.com/denissouzaa' target='_blank' rel='noreferrer'>
                                    <Button className='buttonDestaque'><img className='me-2' width="20px" src={IconGithub} alt="LinkedIn" />GitHub</Button>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-12'>
                        <div id="anchor1">
                            <h5 className='titleDestaque'>#Sobre mim</h5>
                            <p>Desenvolvedor Web com Experiência no Desenvolvimento de Sites e Aplicações. Conhecimento em Javascript, com Experiência em React, Angular, Css, Bootstrap, HTML5. Possuo também Experiência no Desenvolvimento de Aplicações Mobile com React-Native e Flutter.</p>
                        </div>
                        <div id="anchor2">
                            <h5 className='titleDestaque'>#Projetos</h5>
                            <div className="gridHome">
                                <div>
                                    <img alt="Imagem do Projeto" src={cupomking} />
                                    <h2>Cupom King</h2>
                                    <p className='boxPortifolio'>O projeto é um site que disponibiliza cupons de desconto de varias redes do brasil.</p>
                                    <span>REACT, JAVASCRIPT e CSS.</span><br/>

                                    <a href='https://cupomking.com.br/' target='_blank' rel='noreferrer'>
                                        <Button className='buttonDestaque mt-3'>Visualizar</Button>
                                    </a>
                                </div>
                                <div>
                                    <img alt="Imagem do Projeto" src={tempoweb} />
                                    <h2>Tempo Web</h2>
                                    <p className='boxPortifolio'>Website para consultar o clima de qualquer cidade do mundo!</p>
                                    <span>REACT, Javascript e CSS.</span><br/>

                                    <a href='https://github.com/denissouzaa/tempoweb' target='_blank' rel='noreferrer'>
                                        <Button className='buttonDestaque mt-3'>Visualizar</Button>
                                    </a>
                                </div>
                                <div>
                                    <img alt="Imagem do Projeto" src={driive} />
                                    <h2>Driive</h2>
                                    <p className='boxPortifolio'>Desenvolvido e lançado para Android tem o foco no controle de gastos e gerenciamento de veículos.</p>
                                    <span>FLUTTER, DART</span> <br/>

                                    <a href='https://play.google.com/store/apps/details?id=br.com.app.combustivel' target='_blank' rel='noreferrer'>
                                        <Button className='buttonDestaque mt-3'>Visualizar</Button>
                                    </a>
                                </div>
                                <div>
                                    <img alt="Imagem do Projeto" src={frade} />
                                    <h2>Supermercado Frade</h2>
                                    <p className='boxPortifolio'>Lançado para Android e IOS para cliente que desejava ter seu supermercado nas lojas de aplicativos.</p>
                                    <span>Kotlin, Swift</span><br/>

                                    <a href='https://play.google.com/store/apps/details?id=flow.qrcode.barcode.scanner' target='_blank' rel='noreferrer'>
                                        <Button className='buttonDestaque mt-3'>Visualizar</Button>
                                    </a>
                                </div>
                                <div>
                                    <img alt="Imagem do Projeto" src={baixarvideos} />
                                    <h2>Baixar Videos</h2>
                                    <p className='boxPortifolio'>Site desenvolvido em PHP que permitia Baixar Vídeos do YouTube no computador/celular.</p>
                                    <span>HTML, CSS e PHP.</span> <br/>

                                    <a href='https://github.com/denissouzaa/baixarvideos' target='_blank' rel='noreferrer'>
                                        <Button className='buttonDestaque mt-3'>Visualizar</Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </main>
            <footer></footer>
        </>
    )
}