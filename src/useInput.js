export const useInput = (initialValue, validator) => {
  const [ value, setValue ] = useState(initialValue);
  // onChange 이벤트는 event 를 가지고 있음
  const onChange = (event) =>  {
    const { target : { value }} = event;
    let willUpdate = true;
    if(typeof validator === "function") {
      willUpdate = validator(value) // willUpdate에 true / false 반환하는듯?
    }
    if(willUpdate) {
      setValue(value); //그래서 willUpdate가 true면 setValue 하는 거
    }
  }
  return { value, onChange };
}