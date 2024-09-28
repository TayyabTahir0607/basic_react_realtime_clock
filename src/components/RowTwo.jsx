function RowTwo(){
    let time = new Date();
    return <h2>
        Current time is {time.toLocaleTimeString()}
    </h2>
}
export default RowTwo;