import { Card, CardBody, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <div style={{backgroundColor:'#F5F9FB',height:'100%',width:'100%', paddingTop:'40px'}} >
            <div style={{height:'100px',width:'100%',paddingLeft:'105px'}}>
                <div style={{backgroundColor:'white',height:'100px',width:'90%',padding: '25px 0px 0px 20px',fontSize:'30px', font:'bold'}}>
                    <h1>
                        Currently Browsing: Design
                    </h1>
                </div>
            </div>
            <div style={{backgroundColor:'',height:'100%',width:'100%',paddingTop:'40px'}}>
                <div style={{height:'100%',width:'100%', paddingLeft:'105px'}}>
                    <Stack direction={['column','row']} style={{backgroundColor:'white',height:'100%',width:'90%'}}>
                        <Card style={{backgroundColor:'', height:'100%',width:'33%'}}>
                            <CardBody>
                                <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Image'>
                                </Image>
                                <br />
                                <Link _hover={{textDecoration:'none'}}>DESIGN</Link>
                                <br />
                                <Heading size='lg'>TITLE OF THE BLOG</Heading>
                                <br />
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, assumenda! Dolores, aperiam. Mollitia ut quas consequatur delectus velit, iure ipsum illo totam maxime, officia sapiente, incidunt aliquam optio quibusdam sed?</Text>
                            </CardBody>
                        </Card>
                        <Card style={{backgroundColor:'', height:'100%',width:'33%'}}>
                            <CardBody>
                                <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Image'>
                                </Image>
                                <br />
                                <Link _hover={{textDecoration:'none'}}>DESIGN</Link>
                                <br />
                                <Heading size='lg'>TITLE OF THE BLOG</Heading>
                                <br />
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, assumenda! Dolores, aperiam. Mollitia ut quas consequatur delectus velit, iure ipsum illo totam maxime, officia sapiente, incidunt aliquam optio quibusdam sed?</Text>
                            </CardBody>
                        </Card>
                        <Card style={{backgroundColor:'', height:'100%',width:'33%'}}>
                            <CardBody>
                                <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Image'>
                                </Image>
                                <br />
                                <Link _hover={{textDecoration:'none'}}>DESIGN</Link>
                                <br />
                                <Heading size='lg'>TITLE OF THE BLOG</Heading>
                                <br />
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, assumenda! Dolores, aperiam. Mollitia ut quas consequatur delectus velit, iure ipsum illo totam maxime, officia sapiente, incidunt aliquam optio quibusdam sed?</Text>
                            </CardBody>
                        </Card>
                    </Stack>
                </div>
            </div>    
        </div>
    </div>
  );
}
