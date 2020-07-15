import React from 'react';
//子路由
import {Link,Route} from 'react-router-dom';
//引入页面
import Jijie from './jijie.js';
import Zhou from './zhou.js';
class Find extends React.Component{
	constructor(arg) {
		super(); 
		this.state={
			zhouArr:["欧洲","亚洲","大洋洲","非洲","北美洲","南美洲"],
			jijieArr:["春意阑珊","盛夏果实","秋来秋去","冬之恋曲"]
		}
	}
	render(){
		return <div>
			<div><input id="inp" placeholder="请输入你想去的国家" /></div>
			<div id="fTitle">
			 	<Link to="/find/zhou"><p>洲</p></Link>&nbsp; &nbsp;
			 	<Link to="/find/jijie"><p>季节</p></Link>
			</div>
			<div>
				{/*子路由的路由表*/}
				<Route path="/find/jijie" component={Jijie}/>
				<Route path="/find/zhou" component={Zhou}/>
			 </div>
		</div>
	}
}
export default Find;