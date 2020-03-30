<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="utf-8">
		<title>Test</title>
		<link rel="stylesheet" type="text/css" href="css/jquery-jvectormap-2.0.5.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>

	<body id="particle">
		<section id="overlay" class="map_wrapper">
			<div id="wmap">
				
			</div>
		</section>

		<footer class="data_box">
			<h1 class="has-lines">Total Counts</h1>
			<div class="l-g3">
			  <div class="level-item">
			  	<div class="innr">
			  		ACTIVE: <span id="activ"></span><span class="txt-sm">&#47;</span><span id="cov-total-confirm" class="txt-sm"></span>
			  	</div>
			  </div>
			  <div class="level-item">
			  	<div class="innr">
			  		RECOVERIES: <span id="cov-total-recoverd"></span>
			  	</div>
			  </div>
			  <div class="level-item">
			  	<div class="innr">
			  		DEATHS: <span id="cov-total-dead"></span>
			  	</div>
			  </div>
			</div>
			<div class="lupdate">
				<span> Last Update: <span id="cov-time"></span></span>
			</div>
				
		</footer>

		<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
		<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
		<script src="js/corona-virus-data-public.js"></script>
		<script src="js/json2html.js"></script>
		<!-- map js -->
		<script src="js/jquery-jvectormap-2.0.5.min.js" type="text/javascript"></script>
		<script src="js/jquery-jvectormap-world-mill-en.js"></script>
		<script src="js/dataall.js"></script>
		<script src="js/all.js"></script>

	</body>
</html>


