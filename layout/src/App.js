import React from 'react';
import logo from './logo.svg';
// import fiora from './fiora.jpg'
// import yacine from './yacine.jpg'
// import lucas from './lucas.jpg'
import './App.css';
import posts from './user'

 



class App extends React.Component {
  
  constructor(props){
        super(props);
        this.state = {            
            posts :posts            
        };
    }

    render() {
        const {posts} = this.state;
        return(
            <div>
                <ol className="item">
                {
                    posts.map(post => (
                        <div className="card m-5"  key={post.id} >
                        <img className="card-img-top"  src={post.src} alt=" " />
                        <div className="card-body">
                          <h5 className="card-title" className="title"><p className="title">{post.name}</p> </h5>
                          <p className="card-text">Bonjour, mon prénom est {post.name} et mon nom de famille est {post.lastname}, j'ai {post.body} et j'habite à {post.ville}.</p>
                          <a href="#" class="btn btn-primary"> <p className="body">En savoir plus</p></a>
                        </div>
                      </div>
                      
                    ))
                }
                </ol>
            </div>
        );
    }
  


}


export default App;
