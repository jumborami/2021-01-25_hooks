// usePreventLeave 와 useConfirm 은 useEffect 와 useState 를 사용하지 않기 때문에 엄밀히 말하면 hook 은 아니다.
// useConfirm (보통 사용자가 무언가를 하기 전에 확인하는 것 - ex) 버튼을 클릭하면 이벤트 실행 전에 메시지 보여주
export const useConfirm = (message="", onConfirm, onCancel) => {
  const confirmAction = () => {
    if(window.confirm(message)) { // confrim function 이 browser 에 message 를 가지고 있다면 callback 을 호출한다
      onConfirm();
    } else {
      onCancel();
    }
  } 
  return confirmAction; // App 의 confirmDelete는 리턴된 confirmAction이고 우리가 confirmAction 을 부르면 브라우저에 있는 confirm 에 갈거고 그게 true면 callback이 실행되면서 deleteWorld가 실행되는 것

  if(!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if(onCancel && typeof onCancel !== "function") {
    return;
  }
};