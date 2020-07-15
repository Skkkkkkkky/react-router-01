import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//引入相关路由包
import {BrowserRouter,Link,Route} from "react-router-dom";
//引入页面
import Main from "./pages/main.js";
import About from "./pages/about.js";
import Find from "./pages/find.js";
import Goal from "./pages/goal.js";
import Mine from "./pages/mine.js";
import './index.css';

//exact={true} 可以表示 完全匹配 
//basename 为所有位置添加一个基准URL
//getUserConfirmation  进入页面前需要执行的一些提示代码
//forceRefresh 为了兼容 ie的低版本不识别 html5的history属性，如果是true就需要强制整页刷新；默认是false
//keyLength 可以唯一的标识某个时间点的该页面  设置它里面路由的 location.key 的长度。默认是6。（key的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面。）


/* 页面参数:
match:        params
location:     state   search
history:     go(-1) 跳转到上一页或上几页   push( 路径) 跳转到某一页  

*/
/*
Route 有三种方式：
1.component 路由到一个组件
2.render 路由的内容直接渲染出来
3.children 可以匹配任何路径
*/

const App = ()=>( //注意这里是小括号
	<BrowserRouter basename="/sport" getUserConfirmation={getDefault()} forceRefresh={false} keyLength = {5}>
		<div id="Navbar">
			<Link to="/">首页</Link>
			<Link to="/about">关于我们</Link>
			<Link to="/find">发现</Link>
			<Link to="/goal">目的地</Link>
			<Link to="/mine">我</Link>
			
		</div>
		<div>
			<Route path="/" exact={true} component={Main} />
			<Route path="/about" component={About} />
			<Route path="/find" component={Find} />
			<Route path="/goal" component={Goal} />
			<Route path="/mine" component={Mine} />
			<Route path="/render" render={
						({match,location,history})=><div>
							render页面
							{console.log(match,location,history)}	
							</div>} 
					/>
			<Route path="/child" children={()=><div className="footer">我是children页面,我是页尾</div>} />
		</div>
	</BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
