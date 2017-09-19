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
    	{props.cards.map(card => <Card {...card}/>)}
     
    </div> 
  );
};

class Form extends React.Component{
	
  handleSubmit = (event) => {
  	event.preventDefault(); //stop the bubble to refresh page
    console.log('form sub called...' + this.userNameInput.value);
    
  };
  
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
      	<input type="text"
         			 ref={(input) => this.userNameInput = input}  
               placeholder="Github username" 
               required  />
        <button type="submit"> Add Card</button>
      </form>
   	);
  }
}

class App extends React.Component{
	state = {
  	cardsData:[
				{	name: "Naveen Rajagopalan",
   				avatar_url : "https://avatars.githubusercontent.com/u/3024574?v=3",
   				company: "Ness Digital Engineering"
        },
   			{
        	name: "Shreeni KK",
   				avatar_url : "https://avatars.githubusercontent.com/u/21118081?v=3",
   				company: "Ness Digital Engineering"
        }
    ]
  }
	render(){
  	return(
    	<div>
      	<Form/>
        <CardList cards = {this.state.cardsData} />
      </div>
    );
  }
}


ReactDOM.render( <App/> , mountNode);
