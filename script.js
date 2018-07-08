//Apka Reactowa!

//var element = React.createElement('div', {}, 'Hello world!');
/*
var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h2', {}, 'Harry Potter'),
				React.createElement('p', {}, 'Film o czarodzieju')
			),
			React.createElement('li', {},
				React.createElement('h2', {}, 'Król Lew'),
				React.createElement('p', {}, 'Film opowiadajacy historię króla sawanny')
			)
		)
	);
*/
var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lew.jpg'
  },
  {
  	id: 3,
    title: 'Terminator 2',
    desc: 'Film cyborgu przeniesionym w przeszłość',
    img: 'images/terminator2.jpg'
  },
  {
  	id: 4,
    title: 'Prometheus',
    desc: 'Film o ekspedycji w kosmosie',
    img: 'images/prometheus.jpg'
  },
  {
  	id: 5,
    title: 'Back to the future',
    desc: 'Film podróżnikach w czasie',
    img: 'images/backfuture.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
