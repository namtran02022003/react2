
import './App.css';

function React2() {
  return (
    <div>
    <div className="header">
      <div className="menu-header">
        <a href="#" className="a-header">HOME </a>
        <a href="#" className="a-header">JANE &amp; JOHN </a>
        <a href="#" className="a-header">WEDDING </a>
        <a href="#" className="a-header">RSVP </a>
      </div>
    </div>
    <div className="image-header">
      <img src="https://www.w3schools.com/w3images/wedding_couple.jpg" width="100%" />
      <div className="text-header">
        <h1 style={{fontSize: '70px'}}>Jane &amp; John</h1>
        <h2>Are getting married</h2>
        <h2>17.07.2017</h2>
      </div>
    </div>
    <div className="app">
      <h1 style={{textAlign: 'center'}}>Jane &amp; John</h1>
      <div className="image-conten-app">
        <img src="https://www.w3schools.com/w3images/wedding_couple2.jpg" width="100%" />
      </div>
      <p style={{margin: '40px 0'}}><i>You all know us. And we all know you. We are getting married lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </i>
      </p>
      <div className="div-button">
        <button className="button-content-app">wedding details</button>
      </div>
    </div>
    <div className="image-content-big">
      <img width="100%" src="https://www.w3schools.com/w3images/flowers.jpg" />
      <div className="text-header">
        <h1 style={{fontSize: '70px'}}>You Are Invited
        </h1>
        <h2>Of course..</h2>
      </div>
    </div>
    <div className="app">
      <h1 style={{textAlign: 'center'}}>THE WEDDING</h1>
      <div className="image-conten-app">
        <img style={{filter: 'grayscale(50%)'}} src="https://www.w3schools.com/w3images/wedding_location.jpg" width="100%" />
      </div>
      <div style={{display: 'inline-flex', width: '100%'}}>
        <div className="menu-flex">
          <h2>When</h2>
          <h3>Wedding Ceremony - 2:00pm</h3>
          <h3>Reception &amp; Dinner - 5:00pm</h3>
        </div>
        <div className="menu-flex">
          <h2>Where</h2>
          <h3>Some place, an address</h3>
          <h3>Some where, some address</h3>
        </div>
      </div>
    </div>
    <div className="div-footer">
      <h1>HOPE YOU CAN MAKE IT!</h1>
      <h3>Kindly Respond By January, 2017</h3>
      <button className="button-footer">RSWB</button>
      <div className="footer">
        <p className="p-footer"> tran huy tu <a className="a-footer" href="#">nam</a></p>
      </div>
    </div>
  </div>
  );
}

export default React2;
