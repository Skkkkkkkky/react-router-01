import React from 'react';
import axios from "axios";
class Item extends React.Component{
	constructor(arg) {
	    super();
		this.state={
			itemObj:{}
		}
	}
	componentDidMount(){
		axios.get("http://www.51houniao.com/product/product/getProductDetails/"+this.props.match.params.id).then(res=>{
			console.log(res);
			this.setState({
				itemObj:res.data
			})
		})
	}
	render(){
		return <div>内容页
		{this.props.match.params.id}
		{
			this.state.itemObj.product_base_info !== undefined?<img src={this.state.itemObj.product_base_info.pro_pic_url} alt={this.state.itemObj.pro_id} />:""
		}
		</div>
	}
}
export default Item;