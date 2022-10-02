export default function Popularcard(props){
    return(
        <div>
        <div>
          <img
           img src={props.pimg}
            alt="img"
          />
        </div>
        <div className="lorem">
          Lorem ipsum dolor sit amet.
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing Explicabo
            aspernatur consequatur, cupiditate amet nostrum distinctio
            molestias esse.
          </p>
        </div>
      </div> 
    )
}