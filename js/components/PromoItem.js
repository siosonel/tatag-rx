window.opts = {
	concept: 'public-promos',
	collectionH1: 'Promos'
};

window.ItemRenderer = function ItemRenderer() {
  var promo = this.getHtml(this.props.data); //console.log(promo.name.props.html)
    
    return (
      <div className="item">
        <h3>
          {promo.name}, <a href={promo.payURL} target='ad'>{promo.amount} XTE</a> 
        </h3>
          <div>{promo.description}</div>
          {this.editBtn()} {this.saveBtn()} {this.cancelBtn()} {this.progressIcon('... saving ...')}
      </div>
    );
}
