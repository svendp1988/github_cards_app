import React from 'react';
import '../css/App.css';
import {CardList} from "./CardList";
import {Form} from "./Form";


class App extends React.Component {
    testData = [
        {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
        {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
        {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    ];
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     }
    // }
    state = {
        profiles: this.testData,
    }

    addProfile = (profileData) => {
        // const newUser = {name: profileData.name, avatar_url: profileData.avatar_url, company: profileData.company};
        let newData = this.testData.slice().concat(profileData);
        this.setState({
            profiles: newData,
        })
        // this.setState(prevState => ({
        //     profiles: [...prevState.profiles, profileData],
        // }))
    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        {this.props.title}
                    </header>
                </div>
                <Form onSubmit={this.addProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}

export default App;
