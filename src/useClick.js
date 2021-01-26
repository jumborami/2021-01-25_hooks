// useClick (useRef 를 이용한)
export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // useEffect 안에 function을 넣으면 이 function은 componentDidMount, componentDidUpdate 때 호출된다 (dependency가 없다면)
    // 만약 dependency가 있다면 componentDidMount 때만 이 function은 호출된다
    // component 가 mount 되었을 때 addEventListener 를 추가하고 dependency가 없으니 한번만 추가되고 dependency가 있다면 update 될 때마다 이벤트리스너가 추가됨
    if(element.current) {
      element.current.addEventListener("click", onClick)
    }
    // useEffect 를 return 받은 함수는 componentWillUnMount 때 실행된다
    // component 가 mount 되지 않았을 때 eventListener 가 배치되길 원하지 않기 때문에 사용한다!
    return () => {
      if(element.current) {
      element.current.removeEventListener("click", onClick)
      }
    }
  }, [])
  if(typeof onClick !== "function") { 
    return;  // onClick의 타입이 함수가 아니면 아무것도 반환하지 않음. 텅 빈 함수가 되므로 아무 일도 발생하지 않는다.
  }
  return element;
}