import { Card, Container, Row, Col, Image } from "react-bootstrap"
import Danur from '../assets/images/Horor/Danur.png'
import DreadOut from '../assets/images/Horor/DreadOut.png'
import JanganSendirian from '../assets/images/Horor/JanganSendirian.png'
import KeretaBerdarah from '../assets/images/Horor/KeretaBerdarah.png'
import Kuyang from '../assets/images/Horor/Kuyang.png'
import PantasMati from '../assets/images/Horor/PantasMati.png'

const Horor = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">HOROR MUVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="muvieWrapper" id="horor" >
                        <Card className="HororImage ">
                            <Image src={Danur} alt="danur muvie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Danur</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting
                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}  className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={DreadOut} alt="DreadOut muvie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DreadOut</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting
                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}  className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={JanganSendirian} alt="JanganSendirian muvie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Jangan Sendirian</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting
                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={KeretaBerdarah} alt="KeretaBerdarah muvie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Kereta Berdarah</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting
                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                     <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={Kuyang} alt="Kuyang muvie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Kuyang</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting
                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={PantasMati} alt="PantasMati muvie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Pantas Mati</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting
                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Horor