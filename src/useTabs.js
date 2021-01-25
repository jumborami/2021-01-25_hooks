export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)) { //allTabs 가 true가 아니거나 allTabs가 배열이 아닐 때 리턴하고 kill the function 함. 종료했기 떄문에 아래에 useTabs(0)만 넣고 allTabs를 안넣어도 오류가 생기지 않는다(?)
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex //setCurrentIndex는 value를 바꿔준다
  };
};