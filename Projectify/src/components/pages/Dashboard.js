import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDyXr-aFKgfQLHWmjlBk7HB8kJFk68mVlpjY9cFw&s' alt='...' />
                </div>
            </div>
            <div className='mid-container-1'>
                <h1>Full Name</h1>
                <hr style={{width: "50%"}}/>
                <h4>123456789</h4>
                <p>Student</p>
                <p>Manipal University Jaipur</p>
                <hr />
            </div>
            <div className='mid-container-2'>
                <h3>Domain(s) selected :</h3>
                <p>Web Development</p> 
                <h3>Language(s) known:</h3>
                <p>HTML, CSS, JavaScript, React.js</p> 

                <hr/>
            </div>
                
            
            <div className='lower-container'>
                <div className='social-handle'>
                    <a href='samriddhi.209302338@muj.manipal.edu'> <i class="fa-solid fa-envelope"></i> name123xyzabc@gmail.com</a>
                    <br/>
                    <a href='https://www.linkedin.com/in/samriddhi-singh-624777201/'> <i class="fa-brands fa-linkedin"></i> samriddhi-singh-624777201 </a>
                    <br />
                    <a href='https://github.com/Samriddhii-Siingh'> <i class="fa-brands fa-square-github"></i> Samriddhii-Siingh</a>
                </div>
            </div>
        </div>

        <div className='project-status'>
            <div className='project-container'>
                <div className='project-detail'>
                    <h2>Project Title</h2>
                    <h4>Project-ID</h4>
                    <h3>Mentor Name</h3>
                </div>
                <div className='project-detail'>
                    <h2>Project Title</h2>
                    <h4>Project-ID</h4>
                    <h3>Mentor Name</h3>
                </div>
            </div>
        </div>


        <div className="notifi-box" id="box">
                <h2>Notifications <span>17</span></h2>
                <div className="notifi-item">
                    <div className="text">
                    <h4>Elias Abdurrahman</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                    </div> 
                </div>

                <div className="notifi-item">
                    <div className="text">
                    <h4>John Doe</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                    </div> 
                </div>

                <div className="notifi-item">
                    <div className="text">
                    <h4>Emad Ali</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                    </div> 
                </div>

                <div className="notifi-item">
                    <div className="text">
                    <h4>Ekram Abu </h4>
                    <p>@lorem ipsum dolor sit amet</p>
                    </div> 
                </div>

                <div class="notifi-item">
                    <div className="text">
                    <h4>Jane Doe</h4>
                    <p>@lorem ipsum dolor sit amet</p>
                    </div> 
                </div>
            </div>

            <div className='request_container'>
            <div className='request_meet'>
              <ul>
                <li><a href="#">Request a meet</a></li>
              </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
