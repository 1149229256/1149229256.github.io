import './index.scss';
import {
    useEffect,
    useState
} from 'react';
import $ from 'jquery';

function LiveList(){
    return (
        <div className="live-list">
            <div className="live-list-one">
                <i className="one-cover cover-1"></i>
                <p className="one-title">
                    记第一条生活碎片
                </p>
                <p className="one-info">
                    愿生活中经历的所有云翳，能够造就你一个美丽的黄昏。
                </p>
            </div>
        </div>
    )
}

export default LiveList;