window.opts = {
	concept: 'public-promos',
	collectionH1: 'Promos'
};

window.ItemRenderer = function ItemRenderer() {
	var promo = this.props.data;
    
    return (
      <div className="item">
        <h3>
          {promo.name}, <a href={promo.payURL} target='ad'>{promo.amount.toFixed(2)} XTE</a> 
        </h3>
          <div>{promo.description}</div>
          {this.editBtn()} {this.saveBtn()} {this.cancelBtn()} {this.progressIcon('... saving ...')}
      </div>
    );
}
