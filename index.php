<?php
$imgPath = '/img/';

if (!is_dir(__DIR__.$imgPath)) mkdir(__DIR__.$imgPath);

function validImage($file)
{
	global $imgPath;
    return !is_dir(__DIR__.$imgPath.$file);
}
$files = scandir(__DIR__.$imgPath);

shuffle($files);
$imgs = [];
foreach($files as $file) if($file != '.' && $file != '..') array_push($imgs, $file);

if (count($imgs) == 0) die ("Place your images on the img directory.");

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
		<div class="gallery">
			<?php
			foreach($imgs as $i => $img) echo "<div data-id='".$i."' style='z-index: ".$i."' class='img'><img src='".$imgPath.$img."'/></div>";
			?>
		</div>
	</body>
</html>
