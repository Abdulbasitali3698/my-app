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
        </div>
    </div>
  );
}
