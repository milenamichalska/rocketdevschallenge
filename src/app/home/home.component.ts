import { Component, OnInit } from '@angular/core';

declare var Snap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      let $canvas = document.getElementById('svg5917'), 
          s = Snap($canvas),
          planetka = Snap('#planetka');

    $canvas.style.opacity = "1";

    // Sizes
    planetka.size = planetka.getBBox();

        // Center elements
        let centerEls = function() {
        //	Store centers of elements
            planetka.center = getElementCenter(planetka)
            console.log(planetka.center)
            planetka.transform('translate('+planetka.center.x+','+planetka.center.y+') ');
        }();

        // Center elements on window resize
        window.onresize = function(){ 
            centerEls();
        };

        s.mousemove(function(e){
            planetka.transform(	'translate('+(e.pageX/24+(planetka.center.x))+ // Align to X
                            ' '+planetka.center.y+')');	// Align to center Y
        });

        function getElementCenter(el) {
            console.log(el)
            var windowX = el.size.x2,
                windowY = el.size.y;

            return {
                'x'	: windowX + 150,
                'y'	: windowY - el.size.height
            }
        }
          }

}
