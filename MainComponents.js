class App extends React.Component {
    constructor (props) {
        super (props) ;
    }


    render () {
        return (
        <div>
            <header><HeaderPage/></header>
            <section>
                <nav><SidebarPage/></nav>
                <article><ContentPage/></article>
            </section>
            <footer><FooterPage/></footer>
        </div>
        )
    }
}

ReactDOM.render (<app/>, document.getElementById("app"));