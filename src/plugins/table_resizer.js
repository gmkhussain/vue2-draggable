export default function tableResizerFunc() {
    
    let thElm;
    let currIndex;
    let startOffset;
    let grip;
    let currCellWidth;

    // document.querySelectorAll("table-resizer").setAttribute("data-resizing", false )

    Array.prototype.forEach.call(
      document.querySelectorAll(".table-resizer .th"),
      
      function (th, index) {
        th.style.position = 'relative';
        th.setAttribute('data-colindex', index )
        grip = document.createElement('div');
        grip.setAttribute("class", `resizeHandler`);
        
        grip.innerHTML = "&nbsp;";
        grip.addEventListener('mousedown', function (e) {
            thElm = th;
            currIndex = index;

            startOffset = th.offsetWidth - e.pageX;
            
        });

        th.appendChild(grip);
      });


    document.addEventListener('mousedown', function () {
      if (grip) {
        grip.setAttribute('data-active', 'true')
      }
      if (thElm) {
        thElm.setAttribute('data-active', 'true')
        thElm.closest(".table-resizer").setAttribute('data-active', 'true')
      }
    })

  
    document.addEventListener('mousemove', function (e) {

      if (thElm) {
        // document.querySelectorAll("[data-colindex='"+currIndex+"']").forEach( currentIndexDivs => {
        //   currentIndexDivs.style.width = startOffset + e.pageX + 'px';
        // });
        currCellWidth = startOffset + e.pageX ;
             if ( currCellWidth > 480 ) { currCellWidth = 480 }
        else if ( currCellWidth <= 100 ) { currCellWidth = 100 }

        document.querySelectorAll("[data-colindex='"+currIndex+"'] .resizeHandler").forEach( currentIndexDivs => {
          currentIndexDivs.style.left = currCellWidth + 'px';
        })
      }

    });

    document.addEventListener('mouseup', function () {
  
      if (thElm) {

        // All Cells which matched with current index
        document.querySelectorAll("[data-colindex='"+currIndex+"']").forEach(currentIndexDivs => {
          // let width = startOffset + e.pageX;
         

          // console.log( {width} )
          currentIndexDivs.style.width = currCellWidth + 'px';
       });


        thElm.setAttribute('data-active', 'false')
        thElm.closest(".table-resizer").setAttribute('data-active', 'false')
        thElm.querySelectorAll(".resizeHandler").forEach(el => el.style.left = '' ); // Reset style
        thElm = undefined; // To detache with mousemove event
      }
    })
}