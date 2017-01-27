#Sinopsis
Script for adding gradient background color to an image, based on color theft with color-thief.js; it contains a small function for darkening the resulting color for contrast purposes, for cases when you want to put a white font on top of it.

#Usage
In an HTML structure like this:
```html
<article>
	<a id="gradA_1 href="http://www.example.com/">
		<figure class="main-image">
			<img id="gradSrc_1 src="http://www.example.com/img/example.jpg" alt="Example Image for extracting the color" class="catchcolor">
			<div id="gradFrame_1 class="pick-gradient"></div>
		</figure>
		<div class="bottom-data">
			<h1>TITLE TEXT IN WHITE COLOR</h1>
		</div>
	</a>
</article>
```

The script would take the img element with the "catchcolor" class in it, extract an average color with color-thief.js, and then apply it as a gradient background to the div with id gradFrame_1, which should be css placed on top of it.