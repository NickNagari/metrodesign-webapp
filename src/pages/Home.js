import '../App.css';
import ImageGallery from "../components/Gallery"

function Home() {
  return (
    <>
      <div className="logo-container">
        <img
          className="logo"
          src={'/metrodesign-logo.PNG'}
          alt="metrodesign logo"
        />
      </div>
      <ImageGallery />
    </>
  );
}

export default Home;
