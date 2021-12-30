import './App.css';

function App() {
  
  return (
    <>
      <nav><input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn"><i className="fas fa-caret-down"></i></label>
        <label className="logo"><a href="/">Yuvraj Verma</a></label>
        <ul>
          <li><a href="#project"><i className="fas fa-tasks"></i> Project</a></li>
          <li><a href="#skill"><i className="fas fa-forward"></i> Skills</a></li>
          <li><a href="#work"><i className="fas fa-file-word"></i> Work</a></li>
          <li><a href="#contact"><i className="fas fa-file-contract"></i> Contacts</a></li>
        </ul>
      </nav>
      <div className="home">

        <div className="lefthome">
          <h1>Hello There 👋,I am <br />

            <span> Yuvraj verma</span>
          </h1>
          <p>I love experimenting with the web</p><br />
          <button><a href="resume.pdf" rel="noreferrer" target="_blank" ><i className="fas fa-cloud-download-alt"></i> Download Resume</a></button>
        </div>
        <div className="righthome">
          <img src="home.png" alt="" />
        </div>
      </div>

      <div className="media">
        <ul>
          <li><a href="https://www.facebook.com/yuvraj.verma.7946281/"><i class="fab fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/yuvraj_verma0/"><i class="fab fa-instagram"></i></a> </li>
          <li><a href="https://www.linkedin.com/in/yuvraj-verma-22514b18a/"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/yuvraj-jpg"><i class="fab fa-github"></i></a></li>
          <li><a href="https://www.hackerrank.com/yuvraj1_py"><i class="fab fa-hackerrank"></i></a></li>
        </ul>
      </div>



      <div className="project" id="project">
        <hr />
        <h1>project</h1>
        <br />
        <div className="one">
          <div className="left">
            <h2>1. A Restaurent website </h2><br />
            <ul>
              <li><a href="https://treatleyrestaurent.netlify.app/" rel="noreferrer" target="_blank">Demo</a></li>
            </ul><br />
            <p>A Full responsive Restaurent Website where you can order food on call and the project is build using HTML5,CSS3,JS7 and website is hosting on Netlify. <br />
              You can see project code on my github repository or see website on clicking demo button.
            </p><br />
            <ul>

              <li>HTML5</li>
              <li>CSS3</li>
              <li>JS</li>
            </ul>
          </div>
          <div className="right">
            <img src="one.png" alt="" />
          </div>
        </div>

        <br />
        <div className="two">
          <div className="left">
            <h2>2. Portfolio website </h2><br />
            <ul>
              <li><a href="/">Demo</a></li>
            </ul><br />
            <p>This is my portfolio website which is developed using ReactJs ,HTML5 , CSS3 ,Js and website is hosting on Netlify. <br />
              You can see project code on my github repository or see website on clicking demo button.
              .
            </p><br />
            <ul>
              <li>ReactJS</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JS</li>
            </ul>
          </div>
          <div className="right">
            <img src="two.png" alt="" />
          </div>
        </div>

        <br />
        <div className="three">
          <div className="left">
            <h2>3. Student Management System </h2><br />
            <ul>
              <li><a href="https://github.com/yuvraj-jpg/Student-management-system">Demo</a></li>
            </ul><br />
            <p>It is a software where you can store information about student and you can also use this software for library management and the software is developed using Python, Tkinter GUI and MYSQL <br />
              You can see project code on my github repository 
            </p><br />
            <ul>
              <li>PYTHON</li>
              <li>TKINTER GUI</li>
              <li>MYSQL</li>
              <li>MS EXCEL</li>
            </ul>
          </div>
          <div className="right">
            <img src="three.png" alt="" />
          </div>
        </div>
      </div>
      <div className="skill" id="skill">
        <hr />
        <h1>skill</h1>
        <div className="skillone">
          <div className="skillleft">
            <h2>Frontend</h2>
          </div>
          <div className="skillright">
            <ul>
              <li><i class="devicon-html5-plain colored"></i></li>
              <li><i class="devicon-css3-plain colored"></i></li>
              <li><i class="devicon-javascript-plain colored"></i></li>
              <li><i class="devicon-bootstrap-plain-wordmark colored"></i></li>
              <li><i class="devicon-python-plain-wordmark colored"></i></li>
              <li><i class="devicon-react-original-wordmark colored"></i></li>
            </ul>
          </div>
        </div><br />
        <div className="skilltwo">
          <div className="skillleft">
            <h2>Backend</h2>
          </div>
          <div className="skillright">
            <ul>
              <li><i class="devicon-flask-original-wordmark colored"></i></li>
              <li><i class="devicon-mysql-plain-wordmark colored"></i></li>
              <li><i class="devicon-photoshop-line colored"></i></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <hr />
        <h1>contact</h1>

        <div className="contactone">
          <div className="socialleft">
            <ol>
              <li><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;<a href="/">Dehradun,Uttrakhand</a></li><br />
              <li><i className="fas fa-phone"></i>&nbsp;&nbsp;<a href="/">+91 9634148989</a></li><br />
              <li><i className="fas fa-envelope"></i>&nbsp;&nbsp;<a href="/">yv96875@gmail.com</a></li><br />
            </ol>
            </div>
            <div className="socialright">
            <ul>
              <li><a href="https://www.facebook.com/yuvraj.verma.7946281/"><i class="fab fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/yuvraj_verma0/"><i class="fab fa-instagram"></i></a> </li>
              <li><a href="https://www.linkedin.com/in/yuvraj-verma-22514b18a/"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="https://github.com/yuvraj-jpg"><i class="fab fa-github"></i></a></li>
              <li><a href="https://www.hackerrank.com/yuvraj1_py"><i class="fab fa-hackerrank"></i></a></li>
            </ul>
          </div>
        </div>
        <br />
        <p>&#128293; made by yuvraj verma &#128293;</p>
      </div>
    </>
  );
}

export default App;
