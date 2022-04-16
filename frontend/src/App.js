import './App.css';

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row intro-screen items-center mx-10 sm:mx-20 md:mx-30 p-1" style={{"zIndex":"1"}}>
        <img className="basis-3/4" src="images/main-pic.png" alt="" />
        <div className="jet-brain text-center md:text-left text-xl sm:text-3xl md:text-6xl basis-1/3">Get the service you want,with <span style={{"color": "#DA3A3A"}}>NO</span> waiting in <span style={{"color": "#DA3A3A"}}>Q</span>ue.</div>  
      </div>
      <div className="green-container flex flex-col basis-5/6 my-40 mx-10 sm:mx-15 md:mx-20 pt-80 pb-20 px-2 sm:px-10 md:px-20" style={{"position": "relative"}}>
        <div style={{"position": "absolute","top":"5%","right": "5%"}}><button className="px-8 py-4 bg-red-500 text-white roboto">BOOK NOW</button></div>
        <div className="para-1 grid grid-cols-1 md:grid-cols-2">
          <img src="images/container-pic.png" alt=""></img>
          <div>
            <h1 className="jet-brain text-center md:text-left text-xl sm:text-3xl md:text-6xl mb-10">We will help you get quick service.</h1>
            <div className="text-center md:text-left">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</div>
          </div>
        </div>
        <div className="para-2 mt-20 mb-5">
          <h1 className="sub-title text-center text-xl sm:text-3xl md:text-6xl jet-brain mb-10">SERVICES</h1>
          <div className="image-collection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="m-2">
              <img src="images/gallery-1.png" alt="" />
              <div className="card-text text-center bg-red-500 py-2 text-white">Haircut</div>
            </div>
            <div className="m-2">
              <img src="images/gallery-2.png" alt="" />
              <div className="card-text text-center bg-red-500 py-2 text-white">Hair Wash</div>
            </div>
            <div className="m-2">
              <img src="images/gallery-3.png" alt="" />
              <div className="card-text text-center bg-red-500 py-2 text-white">Shave</div>
            </div>
          </div>
        </div>
        <div className="nav-buttons flex flex-row mt-20 justify-center">
          <img className="mr-5" src="images/left-arrow.png" alt=""></img>
          <img className="ml-5" src="images/right-arrow.png" alt=""></img>
        </div>
      </div>
      <div className="features-section">
       <h1 className="header text-center jet-brain text-xl sm:text-3xl md:text-6xl">Features</h1>
       <div className="features-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-20 mt-10 mb-20">
         <div className="feature left basis-1/4 mb-20 md:mb-0 text-center px-10 ">
           <div className="flex items-center"><img className="m-auto" src="images/Icon.png" alt=""></img></div>
           <div className="features-content mt-5">Check the real-time status of salons</div>
         </div>
         <div className="feature basis-1/4 mb-20 sm:mb-0 text-center px-10 ">
           <div className="flex items-center"><img className="m-auto" src="images/Icon-2.png" alt=""></img></div>
           <div className="features-content mt-5">Compare prices of the top-rated salons, spas and parlours</div>
         </div>
         <div className="feature basis-1/4 mb-20 sm:mb-0 text-center px-10 ">
           <div className="flex items-center"><img className="m-auto" src="images/Icon-3.png" alt=""></img></div>
           <div className="features-content mt-5">Customize the service that fits best for you.</div>
         </div>
         <div className="feature right basis-1/4  text-center px-10 ">
           <div className="flex items-center"><img className="m-auto" style={{"width": "108px","height": "108px"}} src="images/Icon-4.png" alt=""></img></div>
           <div className="features-content mt-5">Go with the trends on hairstyles</div>
         </div>
       </div>
      </div>
    </div>
  );
}

export default App;
