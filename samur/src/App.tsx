import { useState } from "react";


// const tracks = null;
const tracks = [
	{id:1, title:'Musicfun soundtrek!',url:' https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
	{id:2,  title:'Musicfun soundtrek instrumental',url:'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
	
]



 export function App () {	

const [selectedTrackId, setSelectedTracId] = useState(null)


	 if (tracks === null) {
    return (
      <div>
        <h1>Musicfun player</h1>
        <span>Loading...</span>
      </div>
    )
  }

 if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun player</h1>
        <span>No tracks</span>
      </div>
    )
  }

  return (
    <div>
			<h1> Musicfun Player </h1>
			<button onClick={()=>{
				 setSelectedTracId(null)
			}}>reset selection</button>
		<ul>
			 {
				 tracks.map((track)=> {
  return (
		<li key={track.id} style={{border:track.id === selectedTrackId  ? '1px solid red': 'none'}}>
				<div onClick={()=> {
					 setSelectedTracId(track.id)
				} }>
              {track.title}
				</div>
          <audio src={track.url} controls></audio>
			</li>
	)
})
			 }
		</ul> 
    </div>
  )
}


