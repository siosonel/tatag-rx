<html>
<head>
	<meta charset="utf-8" />
	<title>Tatag <?php echo $handler ?></title>


	<link rel="stylesheet" href="/ui/css/normalize.css">

	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="/node_modules/q/q.js"></script>
	<script type="text/javascript" src="/ui/js/phlatSimple.js"></script>
	<script type="text/javascript" src="/ui/js/phlatDriver.js"></script>
	
	<style>
		body {
    		background-color: #999;
		}

		#container {
			width: 100%;
		    max-width: 480px;
		    margin: auto;
		}

		#container H1 {
			text-align: center;
		}

		.item {
			margin: 0.8rem;
			padding: 1rem;
			background-color: #ececec;
		}

		.item div {
			margin: 0.5rem;
		}
	</style>	
</head>
<body>	
	<div id="container"></div>
	<script type="text/babel" src="/rx/js/components/Editable.js"></script>
	<script type="text/babel" src="/rx/<?php echo $itemJs ?>"></script>
	<script type="text/babel" src="/rx/js/components/Collection.js"></script>

	<script>
		function errHandler(err) {
			if (0 && err.message.search("Unauthorized")===0) main.me.modal();
			else console.log(err.message);
		}
	
		var api = phlatSimple(<?php echo $opts ?>);			
	</script>
</body>
</html>