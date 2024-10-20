import logo from './logo.svg';
import './App.css';
import jerseypic from './images/jersey1.jpeg';
import song3 from './audios/song3.mp3';
import video3 from './videos/video3.mp4';

function App() {
  return (
    <div className="App">
      
      <h1>Media Application</h1>
      <h2>Image Gallery</h2>
      <div className="image-gallery">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqt7BR5Q3MEsi7uhfEajc64AHOE_VSqd_lw&s"></img>
        <img src="./images/jersey.jpeg" alt="Image 2" />
        <img src={jerseypic} alt="Image 3" />
      </div>


      <h2>Audio Playlist</h2>
      <div className="audio-player">
        <audio src="https://services.brninfotech.com/tws/media2\/songs\/JERSEY\/01 - Adhento Gaani Vunnapaatuga.mp3" controls >
        </audio>
        <audio controls
          src="./audios/song2.mp3" type="audio/mpeg" >
        </audio>
        <audio controls
          src={song3} type="audio/mpeg" >
        </audio>
      </div>


      <h2>Video Playlist</h2>
          <div className="video-player">
        <video controls
        src="https://services.brninfotech.com/tws/media2/trailers/JERSEY.mp4" type="video/mp4">
        </video>
        <video controls
        src="./videos/video2.mp4" type="video/mp4">
        </video>
        <video controls
        src={video3} type="video/mp4">
        </video>
      </div>
      
    </div>
  );
}

export default App;
