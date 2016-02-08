window.opts = {
	concept: 'public-promos',
	collectionH1: 'Promos'
};

window.ItemRenderer = function ItemRenderer() {
  var promo = this.getHtml(this.props.data);
    
    return (
      <div className="item">
        <h3>
          {promo.name}, <button onClick={this.handleLink}>{promo.amount} XTE</button>
        </h3>
          <div>{promo.description}</div>
          {this.editBtn()} {this.saveBtn()} {this.cancelBtn()} {this.progressIcon('... saving ...')}
      </div>
    );
}
