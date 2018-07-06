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
    image: 'https://1.fwcdn.pl/po/05/71/30571/7529392.5.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'images/lew.jpg'
  },
  {
  	id: 3,
    title: 'Terminator 2',
    desc: 'Film cyborgu przeniesionym w przeszłość',
    image: 'images/terminator2.jpg'
  },
  {
  	id: 4,
    title: 'Promotheus',
    desc: 'Film o ekspedycji w kosmosie',
    image: 'images/terminator2.jpg'
  },
  {
  	id: 5,
    title: 'Back to the future',
    desc: 'Film podróżnikach w czasie',
    image: 'images/terminator2.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('image', {}, movie.image)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
