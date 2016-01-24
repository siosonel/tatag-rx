window.opts = {
	concept: 'my-holdings',
	collectionH1: 'Accounts'
};

window.ItemRenderer = function ItemRenderer() {
	var account = this.props.data.account;
		
    return (
      <div className="item">
        <h3 className="holdingUser">
          {account.brand.name} {this.field('_', this.props.data, 'alias')}, #{account.id}
        </h3>
				<div className='small-4'>{account.balance}</div>
				{this.editBtn()} {this.saveBtn()} {this.cancelBtn()} {this.progressIcon('... saving ...')}
      </div>
    );
}
