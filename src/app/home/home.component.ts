import { Component, OnInit } from '@angular/core';

declare var Snap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
    
    getStarted() {
        
    }

  ngOnInit() {
      let $canvas = document.getElementById('container'),
          s = Snap($canvas),
          planetka = Snap('#planetka'),
          gwiazdki = Snap('#gwiazdki');

    $canvas.style.opacity = "1";

    // Sizes
    planetka.size = planetka.getBBox();
    gwiazdki.size = gwiazdki.getBBox();

        // Center elements
        let centerEls = function() {
        //	Store centers of elements
            planetka.center = getElementCenter(planetka);
            gwiazdki.center = getElementCenter(gwiazdki);
            
            planetka.transform('translate(' + planetka.center.x + ',' + planetka.center.y+') ');
        };

        // Center elements on window resize
        window.onresize = function(){
            centerEls();
        };

        s.mousemove(function(e){
            planetka.transform(	'translate('+(e.pageX/32+(planetka.center.x))+ // Align to X
                            ' '+planetka.center.y+')');	// Align to center Y
            gwiazdki.transform(	'translate('+e.pageX/100+' 55)');
        });

        function getElementCenter(el) {
            console.log(el)
            var windowX = el.size.x2,
                windowY = el.size.y;

            return {
                'x'	: windowX + 200,
                'y'	: windowY - el.size.height
            }
        }
          }

}
