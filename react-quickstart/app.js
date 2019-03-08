
class Channel extends React.Component {
    onClick() {
        console.log("I will clicked " + this.props.name)
    }
    //call by react runtime which component should be used
    render() {
        return (
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}
class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.channels.map(channel => {
                        return (
                            <Channel name={channel.name} key={channel.id} />
                        )
                    })
                }
            </ul>
        )
    }
}
class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onSubmit(e) {
        let { channelName } = this.state;
        this.setState({
            channelName: ''
        })
        this.props.addChannel(channelName)
        e.preventDefault();

    }
    onChange(e) {
        this.setState({
            channelName: e.target.value
        });

    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text'
                    onChange={this.onChange.bind(this)}
                    value={this.state.channelName}
                />
            </form>
        )
    }
}
class ChannelSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                { id: 0, name: 'Hardware Support' },
                { id: 1, name: 'Software Support' }
            ]
        };
    }
    addChannel(name) {
        const { channels } = this.state;
        channels.push({ name: name });
        this.setState({ channels });
    }
    render() {
        return (
            <div>
                <ChannelList channels={this.state.channels} />
                <ChannelForm addChannel={this.addChannel.bind(this)} />
            </div>
        )
    }
}
ReactDOM.render(<ChannelSection />, document.getElementById('app'));
