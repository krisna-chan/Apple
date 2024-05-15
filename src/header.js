const header = document.getElementById('header');
const headerContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <header>
        <div class="container-fluid navigation">
            <div class="container">
                <ul class="nav d-flex" style="list-style: none; padding: 0; white-space: nowrap; padding-top : 10px;">
                    <li class="logo">
                        <div class="apple-logo" >
                            <a href = "./index.html"><svg style="margin-top : -8px" xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44"><path d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" fill="#000"/></svg></a>
                        </div> 
                    </li>
                    <li class="hidden-nav " id="store-nav"><a href = "#">Store </a></li>
                    <li class="hidden-nav " id = 'mac-nav'><a href = "#">Mac </a></li>
                    <li class="hidden-nav" id = 'ipad-nav'><a href = "#">iPad </a></li>
                    <li class="hidden-nav" id="iwatch-nav"><a href = "#">Watch </a></li>
                    <li class="hidden-nav" id="vision-nav"><a href = "#">Vision </a></li>
                    <li class="hidden-nav" id="airpods"><a href = "#">AirPods </a></li>
                    <li class="hidden-nav" id="tvhome-nav"><a href = "#">TV & Home </a></li>
                    <li class="hidden-nav" id="entertainment-nav"><a href = "#">Entertainment </a></li>
                    <li class="hidden-nav" id="accessories-nav"><a href = "#">Accessories </a></li>
                    <li class="hidden-nav" id="support-nav"><a href = "#">Support </a></li>
                    <li class="logo d-flex" style="justify-content: space-between;">
                        <div class="search">
                            <a href = ""><svg style="margin-top : -8px ; margin-right : 10px;" xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44"><path d="M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z" fill="#000"/></svg></a>
                        </div>

                        <div class="bag">
                            <a href = ""><svg style="margin-top : -8px" xmlns="http://www.w3.org/2000/svg" width="14" height="44" viewBox="0 0 14 44"><path d="M12.5 15h-1.81c-.28-1.86-2.04-3-3.69-3s-3.42 1.14-3.69 3H1.5c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5zM7 13c1.18 0 2.43.75 2.7 2H4.3c.27-1.25 1.52-2 2.7-2zm6 14.5c0 .28-.22.5-.5.5h-11c-.28 0-.5-.22-.5-.5v-11c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11z" fill="#000"/></svg></a>
                        </div>
                        
                    </li>
                    
                </div>
        </div>

        <div class="hover-container" style = "width : 100% ; height : 30%">
            <div class="hover-content" style="background-color:rgb(255, 255, 255 , .9);">
                <ul class="inner-content store d-flex">
                    <li style="max-width: 300px; padding-right: 10px;" class="shop-sub mini">Shop
                        <ul>
                            <li>Shop the latest</li>
                            <li>Mac</li>
                            <li>iPad</li>
                            <li>iPhone</li>
                            <li>Apple watch</li>
                            <li>Vision Pro</li>
                            <li>Accessories</li>
                        </ul>
                    </li>

                    <li class = "mini" style="font-size: 1rem; max-width: 200px; margin-left: 10px;">Quick link
                        <ul>
                            <li>Find a store</li>
                            <li>Order status</li>
                            <li>Apple trade in</li>
                            <li>Financing</li>
                        </ul>
                    </li>

                    <li  style="font-size: 1rem; max-width: 200px; margin-left: 10px;" >Shop special store
                        <ul>
                            <li>Certified Refurbished</li>
                            <li>Education</li>
                            <li>Business</li>
                            <li>Veterans and Military</li>
                            <li>Government</li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </header>
    <style>

    .shop-sub{
        position : relative ;
        left : 0px;
        li{
            font-size: 3em;
            font-weight: 500;
        }
    }
    .hover-content{
        background-color : white !important;
    }
    </style>
</body>
</html>`;

header.innerHTML = headerContent;
const store = document.querySelector('.store');
const hoverContainer = document.querySelector('.hover-container');
const content = document.querySelector('.hover-content');
const blury = document.querySelector('.container-wrapper')

const navElements = [
  document.getElementById('store-nav'),
  document.getElementById('mac-nav'),
  document.getElementById('ipad-nav'),
  document.getElementById('iwatch-nav'),
  document.getElementById('vision-nav'),
  document.getElementById('airpods'),
  document.getElementById('tvhome-nav'),
  document.getElementById('entertainment-nav'),
  document.getElementById('accessories-nav'),
];

function toggleContent(showContent) {
  content.style.transition = "ease-in-out .1s";
  content.style.opacity = showContent ? "1" : "0";
  content.style.height = showContent ? "700px" : "0px";
  store.style.visibility = showContent ? 'visible' : 'hidden';
  blury.style.filter = showContent?  'blur(0.6rem)' : 'blur(0)'
  console.log(showContent ? 'in' : 'out');
}

navElements.forEach(nav => {
  nav.addEventListener('mouseover', () => toggleContent(true));

  nav.addEventListener('mouseout', () => toggleContent(false));
})


hoverContainer.addEventListener('mouseover', () => {
    toggleContent(true);
});

hoverContainer.addEventListener('mouseout' , () => {
    toggleContent(false)
})



