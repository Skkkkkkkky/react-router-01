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

//传参
/*
1.params  传字符串或数值
path="/user/:参数名"    在 Link 里面传递参数值  <Link to="/user/666"> user页面 </Link>
页面中接收参数 match.params.参数名
2.search 传字符串
在链接时， to属性 使用 对象的形式，设置了 search的值 <Link to={{pathname:'/search',search:"?name=lili&age=21&sex=nan"}}> search页面 </Link> 
在页面接收时，使用 {new URLSearchParams(location.search).get('name')}

3.state  可以页面间传参传递 数组或对象  
在链接时， to属性 使用 对象的形式，<Link to={{pathname:'/state',state:数组或对象}}> state页面 </Link> 
在页面接收时，使用 {location.state.名字}
*/

const App = ()=>( //注意这里是小括号
	<BrowserRouter>
		<div id="Navbar">
			<Link to="/">首页</Link>
			<Link to="/render"> render页面 </Link>|
			<Link to="/user/666"> user页面 </Link> | 
			<Link to={{pathname:'/search',search:"?name=lili&age=21&sex=nan"}}> search页面 </Link> |
			<Link to={{pathname:'/state',state:[
						{"id":"1","name":"lili","age":21},
						{"id":"2","name":"dashan","age":23},
						{"id":"3","name":"xiaohua","age":27},
				]}}> state页面 </Link> 
		</div>
		<div>
			<Route path="/" exact={true} component={Main} />
			<Route path="/render" render={
						({match,location,history})=><div>
							render页面
							{console.log(match,location,history)}	
							</div>} 
					/>
			<Route path="/user/:userid" render={
						({match,location,history})=><div>
							user页面
							接收的参数是:{match.params.userid}
							{console.log(match,location,history)}	
							</div>} 
					/>
			<Route path="/search" render={
						({match,location,history})=><div>
							search页面
							接收的参数是:
							名字:{new URLSearchParams(location.search).get('name')}<br/>,
							年龄:{new URLSearchParams(location.search).get('age')}<br/>,
							性别:{new URLSearchParams(location.search).get('sex')}<br/>
							{console.log(match,location,history)}	
							</div>} 
					/>
			<Route path="/state" render={
						({match,location,history})=><div>
							state页面
							接收的参数是:
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
