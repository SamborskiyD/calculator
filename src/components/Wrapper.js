import './Wrapper.css';

const Wrapper = ({children}) => {
    return (
        <div className='container' id='wrapper'>{children}</div>
    );
};

export default Wrapper;