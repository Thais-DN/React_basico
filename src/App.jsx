import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
    return (
        <>
            <Header hideMenu={false} />
            {/* <InputWithText /> */}
            <LoginForm />
        </>
    );
}

export default App;