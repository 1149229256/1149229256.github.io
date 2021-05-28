import './index.scss';
import {
    useEffect,
    useState
} from 'react';
import $ from 'jquery';

function DateRank(){
    return (
        <div className="date-rank">
            <h4>那些值得纪念的日子~</h4>
            <ul className="date-rank-list">
                <li>
                    <i className="ranklogo rank-1"></i>
                    宝宝破蛋日: 2000.07.24
                    <p className="date-info">
                        (阴历：06.23)
                    </p>
                </li>
                <li>
                <i className="ranklogo rank-2"></i>
                    宝贝儿破蛋日: 1998.06.12
                    <p className="date-info">
                        (阴历：05.18)
                    </p>
                </li>
                <li>
                <i className="ranklogo rank-3"></i>
                    恋爱纪念日: 2020.10.12
                </li>
            </ul>
        </div>
    )
}

export default DateRank;