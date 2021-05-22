import './index.scss';
import {
    useEffect,
    useState
} from 'react';
import $ from 'jquery';
let timeout;

function ImageShow(){
    const [trackCount, setTrackCount] = useState(3);
    const [trackList, setTrackList] = useState([]);
    const [prevVisible, setPrevVisible] = useState(false);
    const [nextVisible, setNextVisible] = useState(false);
    useEffect(()=>{
        let arr = [];
        for(let i = 0; i < trackCount; i++){
            arr.push(
                <div className={"nana-track nana-track-" + (i+1)}>

                </div>
            )
        }
        setTrackList(arr);
    }, [trackCount]);
    //控制切换图标的显示
    useEffect(()=>{
        if($(".nana-track-container").length > 0){
            checkBtn(0);
        }
    }, [trackList]);
    const checkBtn = (currentLeft) => {
        let prevVisible = false, nextVisible = false;
        let showWidth = parseInt($(".nana-track-container").width()) - 100;
        let actureWidth = trackList.length * $(".nana-track-container").width(), count = 1;
        count = trackList.length;
        if(actureWidth > showWidth){
            nextVisible = true;
        } else {
            nextVisible = false;
        }
        if(Math.abs(currentLeft) == (count-1)*showWidth){
            nextVisible = false;
        } else {
            nextVisible = true;
        }
        if(currentLeft == 0){
            prevVisible = false;
        } else {
            prevVisible = true;
        }
        // console.log(currentLeft, prevVisible, nextVisible);
        setPrevVisible(prevVisible);
        setNextVisible(nextVisible);
    }
    const changeAwardLeft = (type) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            let node = $(".move-container");
            let showWidth = $(".nana-track-container").width();
            let count = trackList.length;
            // count = Math.ceil(actureWidth / showWidth);
            let currentLeft = parseInt(node.css("left"));
            // console.log(currentLeft, actureWidth, showWidth, count)
            if(type == "prev"){
                if(currentLeft == 0){
                    return;
                }
                node.css({
                    left: currentLeft + showWidth
                })
                checkBtn(currentLeft + showWidth);
            }
            if(type == "next"){
                if(Math.abs(currentLeft) == (count-1)*showWidth){
                    return;
                }
                node.css({
                    left: currentLeft - showWidth
                })
                checkBtn(currentLeft - showWidth);
            }
            
        }, 200);
    }
    return (
        <div className="image-show">
            <div className="nana-track-container">
                <div className="move-container">
                {trackList}
                </div>
            </div>
            {
                // prevVisible?
                <div className="prev-btn" onClick={()=>changeAwardLeft("prev")}></div>
                // :
                // ""
            }
            {
                // nextVisible?
                <div className="next-btn" onClick={()=>changeAwardLeft("next")}></div>
                // :
                // ""
            }
        </div>
        
    )
}

export default ImageShow;