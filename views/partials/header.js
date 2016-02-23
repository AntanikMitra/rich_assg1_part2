<!DOCTYPE html>
<html>
<head>
<title><%= title %></title>


<link rel= "stylesheet" href= '/stylesheets/style.css' />
<link rel="stylesheet" href= '/stylesheets/css/materialize.min.css' /> 
  
<script src= "/javascripts/jquery-2.2.0.min.js" > </script>
<script src= "/javascripts/materialize.min.js" > </script>

</head>
<body>


<div class="nav-wrapper">
<a href="#" class="brand-logo"> Logo </a>
<a href= "#" data- activates="mobile-demo" class="button-collapse"> <i class="material-icons"> menu </i></a>
<ul class="right hide-on-med-and-down">
<li><a href="/" title= "Home"> Home </a></li>
<li><a href="/about" title= "About"> About </a></li>
<li><a href="/projects" title= "Projects"> Projects </a></li>
<li><a href="/services" title= "Services"> Services </a></li>
<li><a href="/contact" title= "Contact"> Contact </a></li>
</ul>
< ul class="side-nav" id= "mobile-demo">
<li><a href="/" title= "Home"> Home </a></li>
<li><a href="/about" title= "About"> About </a></li>
<li><a href="/projects" title= "Projects"> Projects </a></li>
<li><a href="/services" title= "Services"> Services < /a></li>
<li><a href="/contact" title= "Contact"> Contact </a></li>
</ul>
</div>
</nav>