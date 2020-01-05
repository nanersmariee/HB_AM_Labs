class TradingCard extends React.Component {
	render() {
		return (
			<div className="card">
				<h2>Name: {this.props.name}</h2>
				<img src={this.props.imgUrl} />
				<h2>Skill: {this.props.skill}</h2>
			</div>
		);
	}
}

class TradingCardContainer extends React.Component {
  render() {
    const paragraphs = [];

    for (const currentCard of tradingCardData) {
      paragraphs.push(<p>{currentCard.name}</p>);
    }

    return (
      <div>
        {paragraphs}
      </div>
    );
  }
}

ReactDOM.render(
	<TradingCardContainer />, document.getElementById('container')
);

// ReactDOM.render(
// 	<TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />, 
// 	document.getElementById('balloonicorn') 
// );

// ReactDOM.render(
// 	<TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
// 	document.getElementById('float')
// );

// ReactDOM.render(
// 	<TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
// 	document.getElementById('llambda')
// );

// ReactDOM.render(
// 	<TradingCard name="Off By One" skill="super crawl speed" imgUrl="/static/img/off-by-one.jpg" />,
// 	document.getElementById('off-by-one')
// );

// ReactDOM.render(
// 	<TradingCard name="Merge" skill="kart wheels" imgUrl="/static/img/merge.jpg" />,
// 	document.getElementById('merge')
// );

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];