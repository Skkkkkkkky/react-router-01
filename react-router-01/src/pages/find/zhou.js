import React from 'react';
import axios from "axios";
class Zhou extends React.Component{
	constructor(arg) {
		super(); 
		this.state={
			zhouArr:["欧洲","亚洲","大洋洲","非洲","北美洲","南美洲"],
			countryArr:[]
		}
	}
	country=(item)=>{
		console.log(item);
		axios.get('http://www.51houniao.com/requirement/destination/countries/'+item).then(res=>{
			console.log("______________",res);
			this.setState({
				countryArr:res.data
			})
		})
	}
	componentDidMount(){
		axios.get('http://www.51houniao.com/requirement/destination/countries/%E6%AC%A7%E6%B4%B2').then(res=>{
			this.setState({
				countryArr:res.data
			})
		})
	}
	render(){
		return <div id="zhou">
			<ul>
				{
					this.state.zhouArr.map(item=>{
						return <li key={item} onClick={()=>this.country(item)}>{item}</li>
					})
				}
			</ul>
			<div>
				{
					this.state.countryArr.map(item=>{
						return <div key={item.countryEn}>{item.country}</div>
					})
				}
			</div>
		</div>
	}
}
export default Zhou;