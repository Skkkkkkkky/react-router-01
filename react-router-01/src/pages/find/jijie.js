import React from 'react';
import axios from "axios";
class Jijie extends React.Component{
	constructor(arg) {
		super(); 
		this.state={
			jijieArr:["春意阑珊","盛夏果实","秋来秋去","冬之恋曲"],
			list:[]
		}
	}
	componentDidMount(){
		axios.post("http://www.51houniao.com/requirement/request/getMatchedProducts",{
			product_type: 1,
			request_season: ["春意阑珊"]
		}).then(res=>{
			console.log("<<<<<<<<<<<<<<<<",res);
			this.setState({
				list:res.data.matchedProducts
			})
		})
	}
	render(){
		return <div id="jijie">
			<ul>
				{
					this.state.jijieArr.map(item=>{
						return <li key={item}>{item}</li>
					})
				}
			</ul>
			<div id="lol">
				<ul>
					{
						this.state.list.map(item=>
							<li key={item.product_id}>
								<img src={item.pro_pic_url} />
								<p>{item.pro_title}</p>
								<div>
									<span>{item.country}</span>|<span>{item.routing_data}天{item.routing_nigth}夜</span>|<span>❤{item.collection_num}</span>
								</div>
							</li>
						)
					}
				</ul>
			</div>
		</div>
	}
}
export default Jijie;