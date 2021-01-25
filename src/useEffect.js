export const App = () => {
  const sayHello = () => console.log("Hello");
  /* useEffect(() => { 
    sayHello();
  }); */
  // useEffect 는 componentDidmount 의 역할을 하기때문에 새로고침 하면 sayHello를 실행하고, componentDidUpdate의 역할도 하기때문에 버튼을 클릭하면 sayHello를 실행한다
  // useEffect 는 componentDidmount, componentWillUnMount, componentDidUpdate 이다!
  // useEffect 는 2개의 인자를 받는데 첫번째는 function으로서의 effect => 그래서 아래처럼 할 수도 있따
  // 두번째 인자는 dependency이다 (deps)  deps 가 있다면 effect는 deps 리스트에 있는 값일 때만 값이 변하도록 활성화된다
  // useEffect 에서 dependency 는 매우매우 중요하다!!
  const [ number, setNumber ] = useState(0);
  const [ aNumber, setAnumber ] = useState(0);
  useEffect(sayHello, [ number ]); //number가 바뀔때만 useEffect가 활성화됨 / [] 빈 값을 넣어주면 마운트 된 후만 실행이 되고 뭐든 업데이트됐을 때는 실행이 되지 않는다
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
}