import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/image2.png'
import image3 from '../assets/images/image3.jpeg'
import image4 from '../assets/images/image4.jpeg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'

const Trending = () => {
    return (
        <div>
            <div data-banner-id="1465212"></div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MUVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="muvieWrapper" id="trending" >
                        <Card className="muvieImage ">
                            <Image src={image1} alt="image1 muvie" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        <Button href="pemandi.mp4">Pemandi Jenazah</Button>
                                    </Card.Title>
                                    <Card.Text className="text-left">

                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={image2} alt="image muvie" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        <Button href="Pabrik.mp4" > Pabrik Gula </Button>
                                    </Card.Title>
                                    <Card.Text className="text-left">

                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={image3} alt="image3 muvie" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        <Button href="Saranjana.mp4">Lampor</Button>
                                    </Card.Title>
                                    <Card.Text className="text-left">

                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={image4} alt="image4 muvie" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        <Button href="Themedium.mp4" src ="Themedium.srt" >Waktu Magrib</Button>
                                    </Card.Title>
                                    <Card.Text className="text-left">

                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={image5} alt="image5 muvie" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Sakaratul Maut</Card.Title>
                                    <Card.Text className="text-left">
                                    </Card.Text>
                                    <Card.Text className="text-left">Durasi 120:min</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="muvieWrapper">
                        <Card className="muvieImage ">
                            <Image src={image6} alt="image6 muvie" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Rumah teteh</Card.Title>
                                    <Card.Text className="text-left">

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

export default Trending