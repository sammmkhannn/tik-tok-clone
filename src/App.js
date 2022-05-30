
import './App.css';
import Video from './Video';
function App() {
  return (
    <div className="app">
      <h1>Lets build, full-stack MERN tiktok clone!</h1>
      <div className="app__videos">
        <Video url='https://media.istockphoto.com/videos/the-couple-with-camping-backpacks-walking-to-the-mountain-top-slow-video-id1151597371'
          channel='sssssangha'
          description='YOOO this works!!'
          song="99 problems but React ain' t one"
          likes={111}
          messages={102}
          shares={50}
        />
      <Video url='https://media.istockphoto.com/videos/the-couple-with-camping-backpacks-walking-to-the-mountain-top-slow-video-id1151597371'/>
      <Video url='https://media.istockphoto.com/videos/the-couple-with-camping-backpacks-walking-to-the-mountain-top-slow-video-id1151597371'/>
      </div>
    </div>
  );
}

export default App;