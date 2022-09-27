// import logo from './logo.svg';
import "./App.css";
import "./App2";
import App2 from "./App2";
import "./MobileOs";
import MobileOs from "./MobileOs";
import "./MobileManufacturers";
import MobileManufacturers from "./MobileManufacturers";
import img1 from "./image/img0_1.png"
import img2 from "./image/img0_2.png"
import img3 from "./image/img0_3.png"

function App() {
  return (
    <div>
      <b>
        Task 1 and TASK 2<br />
        <h2>
          Q1. a. Make a class component as a child of App.js and print Hello
          world!. Try using named and default exports.
        </h2>
        <h2> Q 2 Do the same using arrow functions.</h2>
      </b>
      <App2 />
      <hr></hr>
      <b>
        Task 3<br />
        <h2>
          Q2. Print the following data with two components MobileOS and
          MobileManufacturers using class components.
        </h2>
      </b>
      <p>
        <b>Mobile Os</b>
      </p>
      <MobileOs />
      <p>
        <b>MobileManufactures List</b>
      </p>
      <MobileManufacturers />
      <hr/><hr/>
      <h2>Here new task is started : design the template</h2>
      <div className="main">
        <div className="section_1">
          <div className="img_div1"><img src={img1} alt=""/></div>
          <div><h2>Console</h2></div>
          <div className="para_div1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorem sequi deserunt fugit deleniti, veniam corporis excepturi obcaecati accusamus saepe nihil tenetur nam molestias nobis. Perspiciatis amet earum nulla debitis aliquid eligendi voluptates obcaecati. Sint porro hic, eum recusandae sequi quo fugiat, pariatur ipsum dolor illo animi dicta! Provident, pariatur</div>
          <div><button className="bt_1"><b>Go Anywhere</b></button></div>
        </div>
        <div className="section_1">
          <div className="img_div2"><img src={img2} alt=""/></div>
          <div><h2>Playground</h2></div>
          <div className="para_div2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorem sequi deserunt fugit deleniti, veniam corporis excepturi obcaecati accusamus saepe nihil tenetur nam molestias nobis. Perspiciatis amet earum nulla debitis aliquid eligendi voluptates obcaecati. Sint porro hic, eum recusandae sequi quo fugiat, pariatur ipsum dolor illo animi dicta! Provident, pariatur</div>
          <div><button className="bt_2"><b>Go Anywhere</b></button></div>
        </div>
        <div className="section_1">
          <div className="img_div3"><img src={img3} alt=""/></div>
          <div><h2>Adventure</h2></div>
          <div className="para_div3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorem sequi deserunt fugit deleniti, veniam corporis excepturi obcaecati accusamus saepe nihil tenetur nam molestias nobis. Perspiciatis amet earum nulla debitis aliquid eligendi voluptates obcaecati. Sint porro hic, eum recusandae sequi quo fugiat, pariatur ipsum dolor illo animi dicta! Provident, pariatur.</div>
          <div><button className="bt_3"><b>Go Anywhere</b></button></div>
        </div>
      </div>
      <hr></hr>
      <b>Task 5<br/><h2>Q4. Make the component structure as given in the attachment.</h2></b>
      <hr></hr>
     <div>
      <div className="navbar">Navbar</div>
      <br></br>
      <div className="main_div">
        <div className="section_04">
        <div className="Profile">Profile Dashboard</div>
        <br></br>
        <div className="Trends">Trends</div>
        </div>
        <div className="feed">Feed</div>
        <div className="follow">Why to follow</div>

      </div>
      </div>
      <b>Task 6<br/><h2>Q3. Make the following component structure using class components.</h2></b>
      <div className="main_06">react App
        <div className="comp_01">componant</div>
        <div className="div_section_04">
          <div className="div_section_04_00">Componant
          <div className="div_sec_01_01">Componant</div>
          <br></br>
          <div className="div_sec_01_02">Componant</div>
          </div>
          <div id="div_section_05_00">componant
            <div id="last_div">Componant</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
