window.App = function main(resp) {
  ReactDOM.render(
    <CollectionDiv concept={opts.concept} data={api.byConcept[opts.concept]} collectionH1={opts.collectionH1} />,
    document.getElementById('container')
  );
}

window.CollectionDiv = React.createClass({
  render: function() {
		if (!this.props.data) return false;
    
		return (
      <div className="CollectionDiv">
        <h1>{this.props.collectionH1}</h1>
				<ItemList concept={this.props.concept} data={this.props.data} />
      </div>
    );
  }
});

window.ItemList = React.createClass({
	render: function() {
    var itemNodes = this.props.data.items.map(function(item) {
      return (
        <Item data={item} key={item.id} keyName={"id"}></Item>
      );
    });
		
    return (
      <div className="ItemList">
        {itemNodes}
      </div>
    );
  }
});


window.Item = React.createClass({
	mixins: [Editable],
	
	getInitialState: function() {
    return {editStep: 0};
  },
	
	componentWillReceiveProps: function () {
		this.setState({editStep: this.state.editStep==1 ? 1 : 0});
	}, 

  render: ItemRenderer
});



api.omniListener(App).init('/api/').then(function () {
  api.loadConcept(opts.concept); 
}); 
