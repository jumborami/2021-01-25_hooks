import React, { useState, useEffect, useRef } from "react";



// usePreventLeave 와 useConfirm 은 useEffect 와 useState 를 사용하지 않기 때문에 엄밀히 말하면 hook 은 아니다.
// isPreventLeave (보통 웹사이트에서 볼 수 있는데 창 닫으려고 할 때 아직 저장하지 않았다고 알려주거나 할 떼)

const usePreventLeave = () => {
  const enablePrevent = () => window.addEventListener("")  
  const disbalePrevent = () => window.addEventListener("")
};
const App = () => {
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  )
};

// usePreventLeave 와 useConfirm 은 useEffect 와 useState 를 사용하지 않기 때문에 엄밀히 말하면 hook 은 아니다.
// useConfirm (보통 사용자가 무언가를 하기 전에 확인하는 것 - ex) 버튼을 클릭하면 이벤트 실행 전에 메시지 보여주기)
/*
const useConfirm = (message="", callback, rejection) => {
  const confirmAction = () => {
    if(window.confirm(message)) { // confrim function 이 browser 에 message 를 가지고 있다면 callback 을 호출한다
      callback();
    } else {
      rejection();
    }
  } 
  return confirmAction; // App 의 confirmDelete는 리턴된 confirmAction이고 우리가 confirmAction 을 부르면 브라우저에 있는 confirm 에 갈거고 그게 true면 callback이 실행되면서 deleteWorld가 실행되는 것

  if(typeof callback !== "function") {
    return;
  }
};
const App = () => {
  const deleteWorld= () => console.log("Deleting the World..");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  )
};
*/


// useHover
/*
const useHover = onHover => {
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
    return; 
  }
  return element;
};
const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
*/


// useClick (useRef 를 이용한)
/*
const useClick = (onClick) => {
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
const App = () => {
  //const sayHi = "string" // 얘는 함수가 아니라서 useClick 이 작동 안 함
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
*/


// useRef
/*
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
*/


// useTtile
/*
const useTitle = (initialTitle) => {
  const [ title, setTitle ] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [ title ]);
  return setTitle;
}
const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000); // 5초 있다가 타이틀이 Home으로 바뀜
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
*/


// useEffect
/*
const App = () => {
  const sayHello = () => console.log("Hello");
  //useEffect(() => { 
  //  sayHello();
  //});
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
};
*/


// useTabs
/*
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)) { //allTabs 가 true가 아니거나 allTabs가 배열이 아닐 때 리턴하고 kill the function 함. 종료했기 떄문에 아래에 useTabs(0)만 넣고 allTabs를 안넣어도 오류가 생기지 않는다(?)
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex //setCurrentIndex는 value를 바꿔준다
  };
};
const App = () => {
  const { currentItem, changeItem } = useTabs(0, content)
  return (
    <div className="App">
      {content.map((section, index) => ( 
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
*/


// useInput
/*
const useInput = (initialValue, validator) => {
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
const App = () => {
  const maxLen = value => value.length < 10; // validator 로 쓰일 함수 중 하나
  const includes = value => !value.includes("@"); //validator 로 쓰일 함수 중 하나
  const name = useInput("Ms.", includes);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  ); // value={name.value} onChange={name.onChange} 대신 {...name} 도 
};
*/


// useState
/*
const App = () => {
  const [ item, setItem ] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}
*/

export default App;
