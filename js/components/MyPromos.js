
window.MyPromos = React.createClass({
  render: function() { 
		if (!this.props.data) return false; 
    
		return (
      <div className="myPromos">
        <h1>Promos</h1>
				<PromoList concept={"my-promos"} data={this.props.data} />
      </div>
    );
  }
});

var PromoList = React.createClass({
	render: function() {
    var promoNodes = this.props.data.items.map(function(promo) {
      return (
        <Promo concept={"my-promo"} data={promo} key={promo.id} keyName={"id"}></Promo>
      );
    });
		
    return (
      <div className="PromoList">
        {promoNodes}
      </div>
    );
  }
});


var Promo = React.createClass({
	mixins: [Editable],
	
	getInitialState: function() {
    return {editStep: 0};
  },
	
	componentWillReceiveProps: function () {
		this.setState({editStep: this.state.editStep==1 ? 1 : 0});
	}, 
	
  render: function() {
		var promo = this.props.data;
		
    return (
      <div className="promo">
        <h3>
          {promo.name}, {promo.amount} XTE 
        </h3>
				<div>{promo.description}</div>
				{this.editBtn()} {this.saveBtn()} {this.cancelBtn()} {this.progressIcon('... saving ...')}
      </div>
    );
  }
});
