import {
  useEffect,
  useState
} from "react";
import './App.scss';
import $ from "jquery";
import ImageShow from "./component/imageShow";
import TopNav from "./component/topNav";
import LiveList from "./component/liveList";
import DateRank from "./component/DateRank";

function App() {
  const [coverVisible, setCoverVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      $(".tip-one").css({
        opacity: 1
      })
    }, 500);
    setTimeout(() => {
      $(".tip-two").css({
        opacity: 1
      })
    }, 4000);
    setTimeout(() => {
      $(".tip-three").css({
        opacity: 1
      })
    }, 6000);
    setTimeout(() => {
      $(".tip-four").css({
        opacity: 1
      })
    }, 8000);
  }, [])
  const setCover = () => {
    setCoverVisible(false);
  }
  return (
    <div className="App">
      <div className="app-cover" onClick={setCover} style={{
        display: (coverVisible? "block": "none")
      }}>
        <p className="tip-one">
          也许你有时候会觉得我并不爱你
        </p>
        <p className="tip-two">
          但是对我而言
        </p>
        <p className="tip-three">
          你是例外
        </p>
        <p className="tip-four">
          也是偏爱~
        </p>
      </div>
      <TopNav />
      <ImageShow />
      <div>
        <LiveList />
        <DateRank />
      </div>
      
    </div>
  );
}

export default App;
