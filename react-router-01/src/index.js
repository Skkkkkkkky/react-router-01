import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//引入相关路由包
import {BrowserRouter,NavLink,Route,Switch} from "react-router-dom";
//引入页面
import Main from "./pages/main.js";
import About from "./pages/about.js";
import Find from "./pages/find";
import Goal from "./pages/goal.js";
import Mine from "./pages/mine.js";
import Item from "./pages/item.js";
import './index.css';

const App = ()=>( //注意这里是小括号
	<BrowserRouter>
		<div id="Navbar" >
			<NavLink to="/" activeClassName={"active"} exact={true}>
				<div></div><p>首页</p>
			</NavLink>
			<NavLink to="/find/zhou" >
				<div></div><p>发现</p>
			</NavLink>
			<NavLink to="/about">
				<div></div><p>关于我们</p>
			</NavLink>
			<NavLink to="/goal">
				<div></div><p>目的地</p>
			</NavLink>
			<NavLink to="/mine">
				<div></div><p>我</p>
			</NavLink>
		</div>
		<div>
			<Switch>
				<Route path="/" exact={true} component={Main} />
				<Route path="/about" component={About} />
				<Route path="/find" component={Find} />
				<Route path="/goal" component={Goal} />
				<Route path="/mine" component={Mine} />
				<Route path="/item/:id" component={Item} />
				<Route render={()=><div>特殊页面404</div>} />
			</Switch>
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
