import './index.scss';
import {
    useEffect,
    useState
} from 'react';
import $ from 'jquery';
let timeout;

function TopNav(){
    return (
        <div className="top-nav">
            <ul className="top-nav-list">
                <li className="active">
                    首页
                </li>
                <i className="slice-line"></i>
                <li>
                    回忆录
                </li>
                <i className="slice-line"></i>
                <li>
                    照片存储基地
                </li>
                <i className="slice-line"></i>
                <li>
                    留言墙
                </li>
            </ul>
        </div>
    )
}

export default TopNav;