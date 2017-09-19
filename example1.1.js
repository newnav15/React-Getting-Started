const Card = (props) => {
	return(
  	<div style={{margin : '1em'}}>
    	<img width="75"src = {props.avatar_url}/>
      <div style={{display: "inline-block" , marginLeft:10}}>
      	<div style={{fontSize:'1.25em', fontWeight:'bold'}}> {props.name} </div>
        <div className="info"> {props.company}</div>
      </div>
    </div>
        
  );
};

const CardList = (props) => {
	return (
  	<div> 
    	{props.cards.map(card => <Card key={card.id} {...card} />)}
      
    </div> 
  );
};

class Form extends React.Component{
	state = {userName: ''}
  handleSubmit = (event) => {
  	event.preventDefault(); //stop the bubble to refresh page
    console.log('form sub called...' + this.state.userName);
    // fetch the username with axios
    
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(resp =>{
    	console.log("response is  ..... "+ resp.data.name);
      this.props.onSubmit(resp.data);
      this.setState({userName: ''});
    });
  };
  
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
      	<input type="text"
         			 value = {this.state.userName}
               onChange = {(event) => this.setState({userName: event.target.value})}
               placeholder="Github username" 
               required  />
        <button type="submit"> Add Card</button>
      </form>
   	);
  }
}

class App extends React.Component{
	state = {
  	cards:[
				{	name: "Naveen Rajagopalan",
   				avatar_url : "https://avatars.githubusercontent.com/u/3024574?v=3",
   				company: "Ness Digital Engineering"
        },
   			{
        	name: "Shreeni KK",
   				avatar_url : "https://avatars.githubusercontent.com/u/21118081?v=3",
   				company: "Ness Digital Engineering"
        },
        {
        	name: "Roshni S",
   				avatar_url : "https://avatars.githubusercontent.com/u/24910408?v=3",
   				company: "Art.com"
        }
    ]
  };
  
  addNewCard = (cardInfo) => {
  	console.log(cardInfo);
    this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  };
	render(){
  	return(
    	<div>
      	<Form onSubmit={this.addNewCard}/>
        <CardList cards = {this.state.cards} />
      </div>
    );
  }
}


ReactDOM.render( <App/> , mountNode);
