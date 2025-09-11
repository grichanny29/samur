


function App () {	

const tracks = [
	{id:1, title:'Musicfun soundtrek!',url:' https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
	{id:2, title:'Musicfun soundtrek instrumental',url:'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
	{id:3, title:'Musicfun soundtrek!',url:' https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
	{id:4, title:'Musicfun soundtrek instrumental',url:'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
]


  return (
    <div>
     
	 <div>
			<h1> Musicfun Player </h1>
	</div>

		<ul>
			 {
				 tracks.map((track)=> {
  return (
		<li key={track.id}>
				<div>
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

export default App
