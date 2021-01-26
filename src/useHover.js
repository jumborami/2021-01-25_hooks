// useHover
export const useHover = onHover => {
  const element = useRef();
  useEffect(() => {
    if(element.current) {
      element.current.addEventListener("mouseenter", onHover)
    }
    return () => {
      if(element.current) {
      element.current.removeEventListener("mouseenter", onHover)
      }
    }
  }, [])
  if(typeof onHover !== "function") { 
    return;  // onHover의 타입이 함수가 아니면 아무것도 반환하지 않음. 텅 빈 함수가 되므로 아무 일도 발생하지 않는다.
  }
  return element;
}