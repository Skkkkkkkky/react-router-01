import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

class Main extends React.Component{
	//定义初始值
	constructor(arg) {
	    super();
		this.state={
			list:[],
			likeArr:[]
		}
	}
	componentDidMount(){
		axios.post("http://www.51houniao.com/product/product/getProductRecommendUser",{
			desc: false,
			orderBy: "top",
			pageNow: 1,
			pageSize: 20,
			seller_user_id: "4bc4027c645343f09a964b5c2e9f875b"
		}).then(res=>{
			console.log(">>>>>>>>>>>>>",res);
			this.setState({
				list:res.data
			})
		})
		axios.get("http://www.51houniao.com/product/product/guessYouLike").then(res=>{
			console.log("============",res);
			this.setState({
				likeArr:res.data
			})
		})
	}
	render(){
		return <div>
			<h2>推荐</h2>
			<ul id="iLike">
				{
					this.state.list.map(item=>
						<li key={item.productId}>
							<Link to={"/item/"+item.productId}>
								<img src={item.proPicUrl} alt={item.productId} />
								<div id="word">
									<p>{item.proTitle}</p>
									<p>{item.country}</p>
									<p id="bet"><span>{item.routingDat}天{item.routingNigth}晚</span><span>{item.amount}元起</span></p>
								</div>
								<span id="like">{item.collectionNum}</span>
							</Link>
						</li>
					)
				}
			</ul>
		</div>
	}
	
}

export default Main;