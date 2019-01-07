
export default () => (
    <div className="mapouter">
       <div className="gmap_canvas">
          <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Kariakoo%2C%20Uhuru%20Road%2F%20Nyamwezi%20Street(near%20total%20petrol%20station)&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
          <a href="https://www.embedgooglemap.net">
            embedgooglemap.net
          </a>   
       </div>
       <style jsx>{`
       .mapouter{
           text-align:right;
           height:525px;
           width:100%;
        }
      .gmap_canvas {
           overflow:hidden;
           background:none!important;
           height:525px;
           width:100%;
        }
       `}</style>
 </div>
);


