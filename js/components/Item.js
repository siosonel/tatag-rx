Item.render = function() {
	var promo = this.props.data;
		
	return (
	  <div className="item">
	    <h3>
	      {promo.name}, {promo.amount} XTE 
	    </h3>
				<div>{promo.description}</div>
				{this.editBtn()} {this.saveBtn()} {this.cancelBtn()} {this.progressIcon('... saving ...')}
	  </div>
	);
}
  