<?php
$imgPath = '/img/';

function validImage($file)
{
	global $imgPath;
    return !is_dir(__DIR__.$imgPath.$file);
}
$files = scandir(__DIR__.$imgPath);
$imgs = [];
foreach($files as $file) if($file != '.' && $file != '..') array_push($imgs, $file);
?>
<html>
	<head>
		<title>Slideshow</title>
		<link rel="stylesheet" href="style.css" />
		<script src="jquery.min.js"></script>
		<script>var imgs = <?=json_encode($imgs, false)?>;</script>
        <script src="app.js"></script>
	</head>
	<body>
		<div class="preload">
			<?php
			foreach($imgs as $img) echo "<img src='".$imgPath.$img."'/>";
			?>
		</div>
	</body>
</html>
