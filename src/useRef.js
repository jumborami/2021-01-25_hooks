// useRef
const App = () => {
  //reference 는 컴포넌의 어떤 부분을 선택할 수 있는 방법이다. document.getElementByID()를 사용하는 것과 비슷하다.
  //react에 있는 모든 컴포넌트는 reference element 를 가지고 있다
  const inputR = useRef();
  setTimeout(() => inputR.current.focus(), 5000); //5초 뒤에 input 태그에 포커스가 쨘 하고 들어온다 / html element 인 input 태그에 접근이 가능해졌음
  setTimeout(() => console.log(inputR.current), 1000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={inputR} placeholder="la" /> 
    </div>
  ) // input 태그에게 inputR 을 참조하라고 하는 것!
}
