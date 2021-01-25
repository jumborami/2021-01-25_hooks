export const useTitle = (initialTitle) => {
  const [ title, setTitle ] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title; // title 태그 내부에 title을 넣는다
  }
  useEffect(updateTitle, [ title ]);
  return setTitle;
}