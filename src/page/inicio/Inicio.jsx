import { Col, Container, Row } from 'react-bootstrap'
// 
// import Video from '../../components/video/Video'
import './inicio.css'


const Inicio = () => {
    return (
        <>
        <div className="inicio">

            <div className="banner-principal">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='titulo1'>SOMOS UNA AGENCIA</h2>
                            <h2>DE PUBLICIDAD Y DISEÑO.</h2>
                            <h2>SOMOS <span className='ultimo-titulo'>COOL BABY.</span></h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row>
                <Col>
                    <div className="video">
                        {/* <Video /> */}
                    </div>

                </Col>
            </Row>
                </div>
        </>
    )
}

export default Inicio